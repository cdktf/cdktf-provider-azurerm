# `azurerm_consumption_budget_resource_group`

Refer to the Terraform Registory for docs: [`azurerm_consumption_budget_resource_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group).

# `consumptionBudgetResourceGroup` Submodule <a name="`consumptionBudgetResourceGroup` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetResourceGroup <a name="ConsumptionBudgetResourceGroup" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup(
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
  notification: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupNotification]],
  resource_group_id: str,
  time_period: ConsumptionBudgetResourceGroupTimePeriod,
  etag: str = None,
  filter: ConsumptionBudgetResourceGroupFilter = None,
  id: str = None,
  time_grain: str = None,
  timeouts: ConsumptionBudgetResourceGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.timeGrain">time_grain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.amount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.notification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#notification ConsumptionBudgetResourceGroup#notification}

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.timePeriod"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#time_period ConsumptionBudgetResourceGroup#time_period}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#filter ConsumptionBudgetResourceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_grain`<sup>Optional</sup> <a name="time_grain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.timeGrain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#timeouts ConsumptionBudgetResourceGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod">put_time_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeGrain">reset_time_grain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter"></a>

```python
def put_filter(
  dimension: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterDimension]] = None,
  not: ConsumptionBudgetResourceGroupFilterNot = None,
  tag: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterTag]] = None
) -> None
```

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter.parameter.dimension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

###### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter.parameter.not"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#not ConsumptionBudgetResourceGroup#not}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putFilter.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification"></a>

```python
def put_notification(
  value: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupNotification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putNotification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}.

---

##### `put_time_period` <a name="put_time_period" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod"></a>

```python
def put_time_period(
  start_date: str,
  end_date: str = None
) -> None
```

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod.parameter.startDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}.

---

###### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.putTimePeriod.parameter.endDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_grain` <a name="reset_time_grain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeGrain"></a>

```python
def reset_time_grain() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference">ConsumptionBudgetResourceGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList">ConsumptionBudgetResourceGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference">ConsumptionBudgetResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference">ConsumptionBudgetResourceGroupTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrainInput">time_grain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriodInput">time_period_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrain">time_grain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filter"></a>

```python
filter: ConsumptionBudgetResourceGroupFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference">ConsumptionBudgetResourceGroupFilterOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notification"></a>

```python
notification: ConsumptionBudgetResourceGroupNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList">ConsumptionBudgetResourceGroupNotificationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeouts"></a>

```python
timeouts: ConsumptionBudgetResourceGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference">ConsumptionBudgetResourceGroupTimeoutsOutputReference</a>

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriod"></a>

```python
time_period: ConsumptionBudgetResourceGroupTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference">ConsumptionBudgetResourceGroupTimePeriodOutputReference</a>

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.filterInput"></a>

```python
filter_input: ConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `time_grain_input`<sup>Optional</sup> <a name="time_grain_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrainInput"></a>

```python
time_grain_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ConsumptionBudgetResourceGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>, cdktf.IResolvable]

---

##### `time_period_input`<sup>Optional</sup> <a name="time_period_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timePeriodInput"></a>

```python
time_period_input: ConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

##### `time_grain`<sup>Required</sup> <a name="time_grain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetResourceGroupConfig <a name="ConsumptionBudgetResourceGroupConfig" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: typing.Union[int, float],
  name: str,
  notification: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupNotification]],
  resource_group_id: str,
  time_period: ConsumptionBudgetResourceGroupTimePeriod,
  etag: str = None,
  filter: ConsumptionBudgetResourceGroupFilter = None,
  id: str = None,
  time_grain: str = None,
  timeouts: ConsumptionBudgetResourceGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeGrain">time_grain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#amount ConsumptionBudgetResourceGroup#amount}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.notification"></a>

```python
notification: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#notification ConsumptionBudgetResourceGroup#notification}

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#resource_group_id ConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timePeriod"></a>

```python
time_period: ConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#time_period ConsumptionBudgetResourceGroup#time_period}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#etag ConsumptionBudgetResourceGroup#etag}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.filter"></a>

```python
filter: ConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#filter ConsumptionBudgetResourceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#id ConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_grain`<sup>Optional</sup> <a name="time_grain" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#time_grain ConsumptionBudgetResourceGroup#time_grain}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupConfig.property.timeouts"></a>

```python
timeouts: ConsumptionBudgetResourceGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#timeouts ConsumptionBudgetResourceGroup#timeouts}

---

### ConsumptionBudgetResourceGroupFilter <a name="ConsumptionBudgetResourceGroupFilter" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter(
  dimension: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterDimension]] = None,
  not: ConsumptionBudgetResourceGroupFilterNot = None,
  tag: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterTag]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.dimension">dimension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]</code> | tag block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.dimension"></a>

```python
dimension: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.not"></a>

```python
not: ConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#not ConsumptionBudgetResourceGroup#not}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

### ConsumptionBudgetResourceGroupFilterDimension <a name="ConsumptionBudgetResourceGroupFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterNot <a name="ConsumptionBudgetResourceGroupFilterNot" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot(
  dimension: ConsumptionBudgetResourceGroupFilterNotDimension = None,
  tag: ConsumptionBudgetResourceGroupFilterNotTag = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a></code> | tag block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.dimension"></a>

```python
dimension: ConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot.property.tag"></a>

```python
tag: ConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

### ConsumptionBudgetResourceGroupFilterNotDimension <a name="ConsumptionBudgetResourceGroupFilterNotDimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterNotTag <a name="ConsumptionBudgetResourceGroupFilterNotTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupFilterTag <a name="ConsumptionBudgetResourceGroupFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

### ConsumptionBudgetResourceGroupNotification <a name="ConsumptionBudgetResourceGroupNotification" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification(
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
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactGroups">contact_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactRoles">contact_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.thresholdType">threshold_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#threshold ConsumptionBudgetResourceGroup#threshold}.

---

##### `contact_emails`<sup>Optional</sup> <a name="contact_emails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#contact_emails ConsumptionBudgetResourceGroup#contact_emails}.

---

##### `contact_groups`<sup>Optional</sup> <a name="contact_groups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactGroups"></a>

```python
contact_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#contact_groups ConsumptionBudgetResourceGroup#contact_groups}.

---

##### `contact_roles`<sup>Optional</sup> <a name="contact_roles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.contactRoles"></a>

```python
contact_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#contact_roles ConsumptionBudgetResourceGroup#contact_roles}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#enabled ConsumptionBudgetResourceGroup#enabled}.

---

##### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#threshold_type ConsumptionBudgetResourceGroup#threshold_type}.

---

### ConsumptionBudgetResourceGroupTimeouts <a name="ConsumptionBudgetResourceGroupTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#create ConsumptionBudgetResourceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#delete ConsumptionBudgetResourceGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#read ConsumptionBudgetResourceGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#update ConsumptionBudgetResourceGroup#update}.

---

### ConsumptionBudgetResourceGroupTimePeriod <a name="ConsumptionBudgetResourceGroupTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod(
  start_date: str,
  end_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.startDate">start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.endDate">end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}. |

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#start_date ConsumptionBudgetResourceGroup#start_date}.

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#end_date ConsumptionBudgetResourceGroup#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetResourceGroupFilterDimensionList <a name="ConsumptionBudgetResourceGroupFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsumptionBudgetResourceGroupFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]

---


### ConsumptionBudgetResourceGroupFilterDimensionOutputReference <a name="ConsumptionBudgetResourceGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConsumptionBudgetResourceGroupFilterDimension, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>, cdktf.IResolvable]

---


### ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference <a name="ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

---


### ConsumptionBudgetResourceGroupFilterNotOutputReference <a name="ConsumptionBudgetResourceGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension"></a>

```python
def put_dimension(
  name: str,
  values: typing.List[str],
  operator: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putDimension.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag"></a>

```python
def put_tag(
  name: str,
  values: typing.List[str],
  operator: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#name ConsumptionBudgetResourceGroup#name}.

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#values ConsumptionBudgetResourceGroup#values}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.putTag.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#operator ConsumptionBudgetResourceGroup#operator}.

---

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference">ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference">ConsumptionBudgetResourceGroupFilterNotTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tagInput">tag_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension"></a>

```python
dimension: ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference">ConsumptionBudgetResourceGroupFilterNotDimensionOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag"></a>

```python
tag: ConsumptionBudgetResourceGroupFilterNotTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference">ConsumptionBudgetResourceGroupFilterNotTagOutputReference</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimensionInput"></a>

```python
dimension_input: ConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.tagInput"></a>

```python
tag_input: ConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

---


### ConsumptionBudgetResourceGroupFilterNotTagOutputReference <a name="ConsumptionBudgetResourceGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

---


### ConsumptionBudgetResourceGroupFilterOutputReference <a name="ConsumptionBudgetResourceGroupFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot">put_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetNot">reset_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension"></a>

```python
def put_dimension(
  value: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterDimension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]

---

##### `put_not` <a name="put_not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot"></a>

```python
def put_not(
  dimension: ConsumptionBudgetResourceGroupFilterNotDimension = None,
  tag: ConsumptionBudgetResourceGroupFilterNotTag = None
) -> None
```

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotDimension">ConsumptionBudgetResourceGroupFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#dimension ConsumptionBudgetResourceGroup#dimension}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putNot.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotTag">ConsumptionBudgetResourceGroupFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/consumption_budget_resource_group#tag ConsumptionBudgetResourceGroup#tag}

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]

---

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_not` <a name="reset_not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetNot"></a>

```python
def reset_not() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList">ConsumptionBudgetResourceGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference">ConsumptionBudgetResourceGroupFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList">ConsumptionBudgetResourceGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimensionInput">dimension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.notInput">not_input</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimension"></a>

```python
dimension: ConsumptionBudgetResourceGroupFilterDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimensionList">ConsumptionBudgetResourceGroupFilterDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.not"></a>

```python
not: ConsumptionBudgetResourceGroupFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNotOutputReference">ConsumptionBudgetResourceGroupFilterNotOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tag"></a>

```python
tag: ConsumptionBudgetResourceGroupFilterTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList">ConsumptionBudgetResourceGroupFilterTagList</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.dimensionInput"></a>

```python
dimension_input: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterDimension">ConsumptionBudgetResourceGroupFilterDimension</a>]]

---

##### `not_input`<sup>Optional</sup> <a name="not_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.notInput"></a>

```python
not_input: ConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterNot">ConsumptionBudgetResourceGroupFilterNot</a>

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilter">ConsumptionBudgetResourceGroupFilter</a>

---


### ConsumptionBudgetResourceGroupFilterTagList <a name="ConsumptionBudgetResourceGroupFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsumptionBudgetResourceGroupFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupFilterTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>]]

---


### ConsumptionBudgetResourceGroupFilterTagOutputReference <a name="ConsumptionBudgetResourceGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConsumptionBudgetResourceGroupFilterTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupFilterTag">ConsumptionBudgetResourceGroupFilterTag</a>, cdktf.IResolvable]

---


### ConsumptionBudgetResourceGroupNotificationList <a name="ConsumptionBudgetResourceGroupNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsumptionBudgetResourceGroupNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsumptionBudgetResourceGroupNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>]]

---


### ConsumptionBudgetResourceGroupNotificationOutputReference <a name="ConsumptionBudgetResourceGroupNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactEmails">reset_contact_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactGroups">reset_contact_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactRoles">reset_contact_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetThresholdType">reset_threshold_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_emails` <a name="reset_contact_emails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactEmails"></a>

```python
def reset_contact_emails() -> None
```

##### `reset_contact_groups` <a name="reset_contact_groups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactGroups"></a>

```python
def reset_contact_groups() -> None
```

##### `reset_contact_roles` <a name="reset_contact_roles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetContactRoles"></a>

```python
def reset_contact_roles() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_threshold_type` <a name="reset_threshold_type" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.resetThresholdType"></a>

```python
def reset_threshold_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmailsInput">contact_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroupsInput">contact_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRolesInput">contact_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdTypeInput">threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups">contact_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles">contact_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_emails_input`<sup>Optional</sup> <a name="contact_emails_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmailsInput"></a>

```python
contact_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_groups_input`<sup>Optional</sup> <a name="contact_groups_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroupsInput"></a>

```python
contact_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_roles_input`<sup>Optional</sup> <a name="contact_roles_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRolesInput"></a>

```python
contact_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type_input`<sup>Optional</sup> <a name="threshold_type_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdTypeInput"></a>

```python
threshold_type_input: str
```

- *Type:* str

---

##### `contact_emails`<sup>Required</sup> <a name="contact_emails" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_groups`<sup>Required</sup> <a name="contact_groups" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups"></a>

```python
contact_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_roles`<sup>Required</sup> <a name="contact_roles" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles"></a>

```python
contact_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConsumptionBudgetResourceGroupNotification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupNotification">ConsumptionBudgetResourceGroupNotification</a>, cdktf.IResolvable]

---


### ConsumptionBudgetResourceGroupTimeoutsOutputReference <a name="ConsumptionBudgetResourceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConsumptionBudgetResourceGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimeouts">ConsumptionBudgetResourceGroupTimeouts</a>, cdktf.IResolvable]

---


### ConsumptionBudgetResourceGroupTimePeriodOutputReference <a name="ConsumptionBudgetResourceGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import consumption_budget_resource_group

consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue"></a>

```python
internal_value: ConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetResourceGroup.ConsumptionBudgetResourceGroupTimePeriod">ConsumptionBudgetResourceGroupTimePeriod</a>

---



