import { ExpensesSummary } from "../../components/ExpensesSummary";
import React from "react";
import { shallow } from "enzyme";
import expenses from '../fixtures/expenses';

test('should render details of one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render details of multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary correctly when no expenses are displayed', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} /> );
    expect(wrapper).toMatchSnapshot();
});