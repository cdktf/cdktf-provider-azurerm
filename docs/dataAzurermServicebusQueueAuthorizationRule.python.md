# `data_azurerm_servicebus_queue_authorization_rule`

Refer to the Terraform Registory for docs: [`data_azurerm_servicebus_queue_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule).

# `dataAzurermServicebusQueueAuthorizationRule` Submodule <a name="`dataAzurermServicebusQueueAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusQueueAuthorizationRule <a name="DataAzurermServicebusQueueAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule azurerm_servicebus_queue_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  namespace_name: str = None,
  queue_id: str = None,
  queue_name: str = None,
  resource_group_name: str = None,
  timeouts: DataAzurermServicebusQueueAuthorizationRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.queueId">queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.queueName">queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}.

---

##### `queue_id`<sup>Optional</sup> <a name="queue_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.queueId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}.

---

##### `queue_name`<sup>Optional</sup> <a name="queue_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.queueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#timeouts DataAzurermServicebusQueueAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetNamespaceName">reset_namespace_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueId">reset_queue_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueName">reset_queue_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace_name` <a name="reset_namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetNamespaceName"></a>

```python
def reset_namespace_name() -> None
```

##### `reset_queue_id` <a name="reset_queue_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueId"></a>

```python
def reset_queue_id() -> None
```

##### `reset_queue_name` <a name="reset_queue_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueName"></a>

```python
def reset_queue_name() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.listen">listen</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.manage">manage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias">primary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias">secondary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.send">send</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueIdInput">queue_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.listen"></a>

```python
listen: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.manage"></a>

```python
manage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_connection_string_alias`<sup>Required</sup> <a name="primary_connection_string_alias" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias"></a>

```python
primary_connection_string_alias: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_connection_string_alias`<sup>Required</sup> <a name="secondary_connection_string_alias" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```python
secondary_connection_string_alias: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.send"></a>

```python
send: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeouts"></a>

```python
timeouts: DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `queue_id_input`<sup>Optional</sup> <a name="queue_id_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueIdInput"></a>

```python
queue_id_input: str
```

- *Type:* str

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermServicebusQueueAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusQueueAuthorizationRuleConfig <a name="DataAzurermServicebusQueueAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  namespace_name: str = None,
  queue_id: str = None,
  queue_name: str = None,
  resource_group_name: str = None,
  timeouts: DataAzurermServicebusQueueAuthorizationRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueId">queue_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueName">queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}.

---

##### `queue_id`<sup>Optional</sup> <a name="queue_id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}.

---

##### `queue_name`<sup>Optional</sup> <a name="queue_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.timeouts"></a>

```python
timeouts: DataAzurermServicebusQueueAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#timeouts DataAzurermServicebusQueueAuthorizationRule#timeouts}

---

### DataAzurermServicebusQueueAuthorizationRuleTimeouts <a name="DataAzurermServicebusQueueAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_queue_authorization_rule

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermServicebusQueueAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>]

---



