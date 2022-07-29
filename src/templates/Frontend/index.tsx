import * as S from './styles';
import Header from '../../organisms/Header';

type FrontendProps = {
    children: React.ReactNode
}

export const Frontend = ({ children } : FrontendProps) => {
    return (
        
        <S.Container>
            <Header />
        </S.Container>
    )
}