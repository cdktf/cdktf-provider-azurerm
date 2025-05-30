# `servicebusSubscriptionRule` Submodule <a name="`servicebusSubscriptionRule` Submodule" id="@cdktf/provider-azurerm.servicebusSubscriptionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusSubscriptionRule <a name="ServicebusSubscriptionRule" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule azurerm_servicebus_subscription_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_type: str,
  name: str,
  subscription_id: str,
  action: str = None,
  correlation_filter: ServicebusSubscriptionRuleCorrelationFilter = None,
  id: str = None,
  sql_filter: str = None,
  timeouts: ServicebusSubscriptionRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.correlationFilter">correlation_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | correlation_filter block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.sqlFilter">sql_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.filterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}.

---

##### `correlation_filter`<sup>Optional</sup> <a name="correlation_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.correlationFilter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

correlation_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#correlation_filter ServicebusSubscriptionRule#correlation_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql_filter`<sup>Optional</sup> <a name="sql_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.sqlFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#timeouts ServicebusSubscriptionRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter">put_correlation_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetCorrelationFilter">reset_correlation_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetSqlFilter">reset_sql_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_correlation_filter` <a name="put_correlation_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter"></a>

```python
def put_correlation_filter(
  content_type: str = None,
  correlation_id: str = None,
  label: str = None,
  message_id: str = None,
  properties: typing.Mapping[str] = None,
  reply_to: str = None,
  reply_to_session_id: str = None,
  session_id: str = None,
  to: str = None
) -> None
```

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}.

---

###### `correlation_id`<sup>Optional</sup> <a name="correlation_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.correlationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}.

---

###### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}.

---

###### `message_id`<sup>Optional</sup> <a name="message_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.messageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}.

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}.

---

###### `reply_to`<sup>Optional</sup> <a name="reply_to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.replyTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}.

---

###### `reply_to_session_id`<sup>Optional</sup> <a name="reply_to_session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.replyToSessionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}.

---

###### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.sessionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}.

---

###### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.to"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_correlation_filter` <a name="reset_correlation_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetCorrelationFilter"></a>

```python
def reset_correlation_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sql_filter` <a name="reset_sql_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetSqlFilter"></a>

```python
def reset_sql_filter() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicebusSubscriptionRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicebusSubscriptionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicebusSubscriptionRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicebusSubscriptionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusSubscriptionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilter">correlation_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference">ServicebusSubscriptionRuleCorrelationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterCompatibilityLevel">sql_filter_compatibility_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference">ServicebusSubscriptionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilterInput">correlation_filter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterInput">sql_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilter">sql_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `correlation_filter`<sup>Required</sup> <a name="correlation_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilter"></a>

```python
correlation_filter: ServicebusSubscriptionRuleCorrelationFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference">ServicebusSubscriptionRuleCorrelationFilterOutputReference</a>

---

##### `sql_filter_compatibility_level`<sup>Required</sup> <a name="sql_filter_compatibility_level" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterCompatibilityLevel"></a>

```python
sql_filter_compatibility_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeouts"></a>

```python
timeouts: ServicebusSubscriptionRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference">ServicebusSubscriptionRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `correlation_filter_input`<sup>Optional</sup> <a name="correlation_filter_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilterInput"></a>

```python
correlation_filter_input: ServicebusSubscriptionRuleCorrelationFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sql_filter_input`<sup>Optional</sup> <a name="sql_filter_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterInput"></a>

```python
sql_filter_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusSubscriptionRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sql_filter`<sup>Required</sup> <a name="sql_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilter"></a>

```python
sql_filter: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusSubscriptionRuleConfig <a name="ServicebusSubscriptionRuleConfig" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_type: str,
  name: str,
  subscription_id: str,
  action: str = None,
  correlation_filter: ServicebusSubscriptionRuleCorrelationFilter = None,
  id: str = None,
  sql_filter: str = None,
  timeouts: ServicebusSubscriptionRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.correlationFilter">correlation_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | correlation_filter block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.sqlFilter">sql_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}.

---

##### `correlation_filter`<sup>Optional</sup> <a name="correlation_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.correlationFilter"></a>

```python
correlation_filter: ServicebusSubscriptionRuleCorrelationFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

correlation_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#correlation_filter ServicebusSubscriptionRule#correlation_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql_filter`<sup>Optional</sup> <a name="sql_filter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.sqlFilter"></a>

```python
sql_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.timeouts"></a>

```python
timeouts: ServicebusSubscriptionRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#timeouts ServicebusSubscriptionRule#timeouts}

---

### ServicebusSubscriptionRuleCorrelationFilter <a name="ServicebusSubscriptionRuleCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter(
  content_type: str = None,
  correlation_id: str = None,
  label: str = None,
  message_id: str = None,
  properties: typing.Mapping[str] = None,
  reply_to: str = None,
  reply_to_session_id: str = None,
  session_id: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.correlationId">correlation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.messageId">message_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyTo">reply_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyToSessionId">reply_to_session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}. |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}.

---

##### `correlation_id`<sup>Optional</sup> <a name="correlation_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.correlationId"></a>

```python
correlation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}.

---

##### `message_id`<sup>Optional</sup> <a name="message_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.messageId"></a>

```python
message_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}.

---

##### `reply_to`<sup>Optional</sup> <a name="reply_to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}.

---

##### `reply_to_session_id`<sup>Optional</sup> <a name="reply_to_session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyToSessionId"></a>

```python
reply_to_session_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}.

---

### ServicebusSubscriptionRuleTimeouts <a name="ServicebusSubscriptionRuleTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusSubscriptionRuleCorrelationFilterOutputReference <a name="ServicebusSubscriptionRuleCorrelationFilterOutputReference" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetCorrelationId">reset_correlation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetMessageId">reset_message_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyTo">reset_reply_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyToSessionId">reset_reply_to_session_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetSessionId">reset_session_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_correlation_id` <a name="reset_correlation_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetCorrelationId"></a>

```python
def reset_correlation_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_message_id` <a name="reset_message_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetMessageId"></a>

```python
def reset_message_id() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_reply_to` <a name="reset_reply_to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyTo"></a>

```python
def reset_reply_to() -> None
```

##### `reset_reply_to_session_id` <a name="reset_reply_to_session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyToSessionId"></a>

```python
def reset_reply_to_session_id() -> None
```

##### `reset_session_id` <a name="reset_session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetSessionId"></a>

```python
def reset_session_id() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationIdInput">correlation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageIdInput">message_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToInput">reply_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionIdInput">reply_to_session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationId">correlation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageId">message_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyTo">reply_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionId">reply_to_session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `correlation_id_input`<sup>Optional</sup> <a name="correlation_id_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationIdInput"></a>

```python
correlation_id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `message_id_input`<sup>Optional</sup> <a name="message_id_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageIdInput"></a>

```python
message_id_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reply_to_input`<sup>Optional</sup> <a name="reply_to_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToInput"></a>

```python
reply_to_input: str
```

- *Type:* str

---

##### `reply_to_session_id_input`<sup>Optional</sup> <a name="reply_to_session_id_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionIdInput"></a>

```python
reply_to_session_id_input: str
```

- *Type:* str

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `correlation_id`<sup>Required</sup> <a name="correlation_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationId"></a>

```python
correlation_id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `message_id`<sup>Required</sup> <a name="message_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageId"></a>

```python
message_id: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reply_to`<sup>Required</sup> <a name="reply_to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

---

##### `reply_to_session_id`<sup>Required</sup> <a name="reply_to_session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionId"></a>

```python
reply_to_session_id: str
```

- *Type:* str

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.internalValue"></a>

```python
internal_value: ServicebusSubscriptionRuleCorrelationFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---


### ServicebusSubscriptionRuleTimeoutsOutputReference <a name="ServicebusSubscriptionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription_rule

servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusSubscriptionRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>]

---



