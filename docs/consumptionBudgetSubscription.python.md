# `azurerm_consumption_budget_subscription`

Refer to the Terraform Registory for docs: [`azurerm_consumption_budget_subscription`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription).

# `consumptionBudgetSubscription` Submodule <a name="`consumptionBudgetSubscription` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetSubscription <a name="ConsumptionBudgetSubscription" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription azurerm_consumption_budget_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: typing.Union[int, float],
  name: str,
  notification: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionNotification]],
  subscription_id: str,
  time_period: ConsumptionBudgetSubscriptionTimePeriod,
  etag: str = None,
  filter: ConsumptionBudgetSubscriptionFilter = None,
  id: str = None,
  time_grain: str = None,
  timeouts: ConsumptionBudgetSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.timeGrain">time_grain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.amount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.notification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#notification ConsumptionBudgetSubscription#notification}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}.

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.timePeriod"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#time_period ConsumptionBudgetSubscription#time_period}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#filter ConsumptionBudgetSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_grain`<sup>Optional</sup> <a name="time_grain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.timeGrain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#timeouts ConsumptionBudgetSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod">put_time_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeGrain">reset_time_grain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter"></a>

```python
def put_filter(
  dimension: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterDimension]] = None,
  not: ConsumptionBudgetSubscriptionFilterNot = None,
  tag: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterTag]] = None
) -> None
```

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter.parameter.dimension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

###### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter.parameter.not"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#not ConsumptionBudgetSubscription#not}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification"></a>

```python
def put_notification(
  value: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionNotification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}.

---

##### `put_time_period` <a name="put_time_period" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod"></a>

```python
def put_time_period(
  start_date: str,
  end_date: str = None
) -> None
```

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod.parameter.startDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}.

---

###### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_grain` <a name="reset_time_grain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeGrain"></a>

```python
def reset_time_grain() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscription.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference">ConsumptionBudgetSubscriptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList">ConsumptionBudgetSubscriptionNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference">ConsumptionBudgetSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference">ConsumptionBudgetSubscriptionTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrainInput">time_grain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriodInput">time_period_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrain">time_grain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filter"></a>

```python
filter: ConsumptionBudgetSubscriptionFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference">ConsumptionBudgetSubscriptionFilterOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notification"></a>

```python
notification: ConsumptionBudgetSubscriptionNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList">ConsumptionBudgetSubscriptionNotificationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeouts"></a>

```python
timeouts: ConsumptionBudgetSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference">ConsumptionBudgetSubscriptionTimeoutsOutputReference</a>

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriod"></a>

```python
time_period: ConsumptionBudgetSubscriptionTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference">ConsumptionBudgetSubscriptionTimePeriodOutputReference</a>

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filterInput"></a>

```python
filter_input: ConsumptionBudgetSubscriptionFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `time_grain_input`<sup>Optional</sup> <a name="time_grain_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrainInput"></a>

```python
time_grain_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ConsumptionBudgetSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>]

---

##### `time_period_input`<sup>Optional</sup> <a name="time_period_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriodInput"></a>

```python
time_period_input: ConsumptionBudgetSubscriptionTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `time_grain`<sup>Required</sup> <a name="time_grain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetSubscriptionConfig <a name="ConsumptionBudgetSubscriptionConfig" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: typing.Union[int, float],
  name: str,
  notification: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionNotification]],
  subscription_id: str,
  time_period: ConsumptionBudgetSubscriptionTimePeriod,
  etag: str = None,
  filter: ConsumptionBudgetSubscriptionFilter = None,
  id: str = None,
  time_grain: str = None,
  timeouts: ConsumptionBudgetSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeGrain">time_grain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.notification"></a>

```python
notification: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#notification ConsumptionBudgetSubscription#notification}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}.

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timePeriod"></a>

```python
time_period: ConsumptionBudgetSubscriptionTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#time_period ConsumptionBudgetSubscription#time_period}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.filter"></a>

```python
filter: ConsumptionBudgetSubscriptionFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#filter ConsumptionBudgetSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_grain`<sup>Optional</sup> <a name="time_grain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeouts"></a>

```python
timeouts: ConsumptionBudgetSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#timeouts ConsumptionBudgetSubscription#timeouts}

---

### ConsumptionBudgetSubscriptionFilter <a name="ConsumptionBudgetSubscriptionFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter(
  dimension: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterDimension]] = None,
  not: ConsumptionBudgetSubscriptionFilterNot = None,
  tag: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterTag]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.dimension">dimension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]</code> | tag block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.dimension"></a>

```python
dimension: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.not"></a>

```python
not: ConsumptionBudgetSubscriptionFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#not ConsumptionBudgetSubscription#not}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

### ConsumptionBudgetSubscriptionFilterDimension <a name="ConsumptionBudgetSubscriptionFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterNot <a name="ConsumptionBudgetSubscriptionFilterNot" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot(
  dimension: ConsumptionBudgetSubscriptionFilterNotDimension = None,
  tag: ConsumptionBudgetSubscriptionFilterNotTag = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a></code> | tag block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.dimension"></a>

```python
dimension: ConsumptionBudgetSubscriptionFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot.property.tag"></a>

```python
tag: ConsumptionBudgetSubscriptionFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

### ConsumptionBudgetSubscriptionFilterNotDimension <a name="ConsumptionBudgetSubscriptionFilterNotDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterNotTag <a name="ConsumptionBudgetSubscriptionFilterNotTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterTag <a name="ConsumptionBudgetSubscriptionFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionNotification <a name="ConsumptionBudgetSubscriptionNotification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification(
  operator: str,
  threshold: typing.Union[int, float],
  contact_emails: typing.List[str] = None,
  contact_groups: typing.List[str] = None,
  contact_roles: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  threshold_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#threshold ConsumptionBudgetSubscription#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#contact_emails ConsumptionBudgetSubscription#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactGroups">contact_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#contact_groups ConsumptionBudgetSubscription#contact_groups}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactRoles">contact_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#contact_roles ConsumptionBudgetSubscription#contact_roles}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#enabled ConsumptionBudgetSubscription#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.thresholdType">threshold_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#threshold_type ConsumptionBudgetSubscription#threshold_type}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#threshold ConsumptionBudgetSubscription#threshold}.

---

##### `contact_emails`<sup>Optional</sup> <a name="contact_emails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#contact_emails ConsumptionBudgetSubscription#contact_emails}.

---

##### `contact_groups`<sup>Optional</sup> <a name="contact_groups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactGroups"></a>

```python
contact_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#contact_groups ConsumptionBudgetSubscription#contact_groups}.

---

##### `contact_roles`<sup>Optional</sup> <a name="contact_roles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactRoles"></a>

```python
contact_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#contact_roles ConsumptionBudgetSubscription#contact_roles}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#enabled ConsumptionBudgetSubscription#enabled}.

---

##### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#threshold_type ConsumptionBudgetSubscription#threshold_type}.

---

### ConsumptionBudgetSubscriptionTimeouts <a name="ConsumptionBudgetSubscriptionTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}.

---

### ConsumptionBudgetSubscriptionTimePeriod <a name="ConsumptionBudgetSubscriptionTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod(
  start_date: str,
  end_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}. |

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetSubscriptionFilterDimensionList <a name="ConsumptionBudgetSubscriptionFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsumptionBudgetSubscriptionFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]

---


### ConsumptionBudgetSubscriptionFilterDimensionOutputReference <a name="ConsumptionBudgetSubscriptionFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsumptionBudgetSubscriptionFilterDimension]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]

---


### ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference <a name="ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetSubscriptionFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

---


### ConsumptionBudgetSubscriptionFilterNotOutputReference <a name="ConsumptionBudgetSubscriptionFilterNotOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension"></a>

```python
def put_dimension(
  name: str,
  values: typing.List[str],
  operator: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putDimension.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag"></a>

```python
def put_tag(
  name: str,
  values: typing.List[str],
  operator: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.putTag.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference">ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference">ConsumptionBudgetSubscriptionFilterNotTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tagInput">tag_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension"></a>

```python
dimension: ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference">ConsumptionBudgetSubscriptionFilterNotDimensionOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag"></a>

```python
tag: ConsumptionBudgetSubscriptionFilterNotTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference">ConsumptionBudgetSubscriptionFilterNotTagOutputReference</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimensionInput"></a>

```python
dimension_input: ConsumptionBudgetSubscriptionFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.tagInput"></a>

```python
tag_input: ConsumptionBudgetSubscriptionFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetSubscriptionFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

---


### ConsumptionBudgetSubscriptionFilterNotTagOutputReference <a name="ConsumptionBudgetSubscriptionFilterNotTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetSubscriptionFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

---


### ConsumptionBudgetSubscriptionFilterOutputReference <a name="ConsumptionBudgetSubscriptionFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot">put_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetNot">reset_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension"></a>

```python
def put_dimension(
  value: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterDimension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]

---

##### `put_not` <a name="put_not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot"></a>

```python
def put_not(
  dimension: ConsumptionBudgetSubscriptionFilterNotDimension = None,
  tag: ConsumptionBudgetSubscriptionFilterNotTag = None
) -> None
```

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotDimension">ConsumptionBudgetSubscriptionFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putNot.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotTag">ConsumptionBudgetSubscriptionFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]

---

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_not` <a name="reset_not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetNot"></a>

```python
def reset_not() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList">ConsumptionBudgetSubscriptionFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference">ConsumptionBudgetSubscriptionFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList">ConsumptionBudgetSubscriptionFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimensionInput">dimension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.notInput">not_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimension"></a>

```python
dimension: ConsumptionBudgetSubscriptionFilterDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList">ConsumptionBudgetSubscriptionFilterDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.not"></a>

```python
not: ConsumptionBudgetSubscriptionFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNotOutputReference">ConsumptionBudgetSubscriptionFilterNotOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tag"></a>

```python
tag: ConsumptionBudgetSubscriptionFilterTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList">ConsumptionBudgetSubscriptionFilterTagList</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimensionInput"></a>

```python
dimension_input: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension">ConsumptionBudgetSubscriptionFilterDimension</a>]]

---

##### `not_input`<sup>Optional</sup> <a name="not_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.notInput"></a>

```python
not_input: ConsumptionBudgetSubscriptionFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterNot">ConsumptionBudgetSubscriptionFilterNot</a>

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetSubscriptionFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---


### ConsumptionBudgetSubscriptionFilterTagList <a name="ConsumptionBudgetSubscriptionFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsumptionBudgetSubscriptionFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionFilterTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]]

---


### ConsumptionBudgetSubscriptionFilterTagOutputReference <a name="ConsumptionBudgetSubscriptionFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsumptionBudgetSubscriptionFilterTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag">ConsumptionBudgetSubscriptionFilterTag</a>]

---


### ConsumptionBudgetSubscriptionNotificationList <a name="ConsumptionBudgetSubscriptionNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsumptionBudgetSubscriptionNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsumptionBudgetSubscriptionNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]]

---


### ConsumptionBudgetSubscriptionNotificationOutputReference <a name="ConsumptionBudgetSubscriptionNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactEmails">reset_contact_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactGroups">reset_contact_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactRoles">reset_contact_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetThresholdType">reset_threshold_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_emails` <a name="reset_contact_emails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactEmails"></a>

```python
def reset_contact_emails() -> None
```

##### `reset_contact_groups` <a name="reset_contact_groups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactGroups"></a>

```python
def reset_contact_groups() -> None
```

##### `reset_contact_roles` <a name="reset_contact_roles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactRoles"></a>

```python
def reset_contact_roles() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_threshold_type` <a name="reset_threshold_type" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetThresholdType"></a>

```python
def reset_threshold_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmailsInput">contact_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroupsInput">contact_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRolesInput">contact_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdTypeInput">threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups">contact_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles">contact_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_emails_input`<sup>Optional</sup> <a name="contact_emails_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmailsInput"></a>

```python
contact_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_groups_input`<sup>Optional</sup> <a name="contact_groups_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroupsInput"></a>

```python
contact_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_roles_input`<sup>Optional</sup> <a name="contact_roles_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRolesInput"></a>

```python
contact_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type_input`<sup>Optional</sup> <a name="threshold_type_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdTypeInput"></a>

```python
threshold_type_input: str
```

- *Type:* str

---

##### `contact_emails`<sup>Required</sup> <a name="contact_emails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_groups`<sup>Required</sup> <a name="contact_groups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups"></a>

```python
contact_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_roles`<sup>Required</sup> <a name="contact_roles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles"></a>

```python
contact_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsumptionBudgetSubscriptionNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification">ConsumptionBudgetSubscriptionNotification</a>]

---


### ConsumptionBudgetSubscriptionTimeoutsOutputReference <a name="ConsumptionBudgetSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsumptionBudgetSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>]

---


### ConsumptionBudgetSubscriptionTimePeriodOutputReference <a name="ConsumptionBudgetSubscriptionTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_subscription

consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetSubscriptionTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---



