interface IInfoBlock {
    layout: 'image-left' | 'image-right';
}

export default function InfoBlock({ layout }: IInfoBlock) {
    switch (layout) {
        case 'image-left':
            return <div className='flex justify-center'>
                <div className="h-96 w-96 text-center bg-no-repeat" style={{ backgroundImage: 'url(/hair-photo-1-2-x.png)' }}></div>
                <div className="flex flex-col w-96 justify-center p-10">
                    <h4 className="text-hero-button pb-4 pt-9 font-montserrat">Hair Loss</h4>
                    <h3 className="pb-4 text-xl font-helvetica">Hair loss needn’t be irreversible. We can help!</h3>
                    <p className="font-open-sans pb-36">
                        Hair loss needn’t be irreversible.There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.
                    </p>
                </div>
            </div>

        case 'image-right':
            return <div className='flex justify-center'>
                <div className="flex flex-col w-96 justify-center p-10">
                    <h4 className="text-hero-button pb-4 pt-9 font-montserrat">Erectile Dysfunction</h4>
                    <h3 className="pb-4 text-xl font-helvetica">Erections can be a tricky thing.
                        But no need to feel down!</h3>
                    <p className="font-open-sans pb-36">
                        There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.
                    </p>
                </div>
                <div className="h-96 w-96 text-center bg-no-repeat" style={{ backgroundImage: 'url(/sex-photo-1-2-x.png)' }}></div>
            </div>
    }
}