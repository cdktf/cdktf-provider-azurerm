# `dataAzurermEventhubAuthorizationRule` Submodule <a name="`dataAzurermEventhubAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermEventhubAuthorizationRule <a name="DataAzurermEventhubAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule azurerm_eventhub_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_name: str,
  name: str,
  namespace_name: str,
  resource_group_name: str,
  id: str = None,
  listen: typing.Union[bool, IResolvable] = None,
  manage: typing.Union[bool, IResolvable] = None,
  send: typing.Union[bool, IResolvable] = None,
  timeouts: DataAzurermEventhubAuthorizationRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#name DataAzurermEventhubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#id DataAzurermEventhubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#listen DataAzurermEventhubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#manage DataAzurermEventhubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#send DataAzurermEventhubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.eventhubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#name DataAzurermEventhubAuthorizationRule#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#id DataAzurermEventhubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.listen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#listen DataAzurermEventhubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.manage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#manage DataAzurermEventhubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.send"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#send DataAzurermEventhubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#timeouts DataAzurermEventhubAuthorizationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetListen">reset_listen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetManage">reset_manage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetSend">reset_send</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#read DataAzurermEventhubAuthorizationRule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listen` <a name="reset_listen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetListen"></a>

```python
def reset_listen() -> None
```

##### `reset_manage` <a name="reset_manage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetManage"></a>

```python
def reset_manage() -> None
```

##### `reset_send` <a name="reset_send" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetSend"></a>

```python
def reset_send() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermEventhubAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermEventhubAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermEventhubAuthorizationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermEventhubAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermEventhubAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionStringAlias">primary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionStringAlias">secondary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference">DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubNameInput">eventhub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listenInput">listen_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manageInput">manage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.sendInput">send_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubName">eventhub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_connection_string_alias`<sup>Required</sup> <a name="primary_connection_string_alias" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionStringAlias"></a>

```python
primary_connection_string_alias: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_connection_string_alias`<sup>Required</sup> <a name="secondary_connection_string_alias" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```python
secondary_connection_string_alias: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeouts"></a>

```python
timeouts: DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference">DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference</a>

---

##### `eventhub_name_input`<sup>Optional</sup> <a name="eventhub_name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubNameInput"></a>

```python
eventhub_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listen_input`<sup>Optional</sup> <a name="listen_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listenInput"></a>

```python
listen_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_input`<sup>Optional</sup> <a name="manage_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manageInput"></a>

```python
manage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `send_input`<sup>Optional</sup> <a name="send_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.sendInput"></a>

```python
send_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermEventhubAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listen"></a>

```python
listen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manage"></a>

```python
manage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.send"></a>

```python
send: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermEventhubAuthorizationRuleConfig <a name="DataAzurermEventhubAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_name: str,
  name: str,
  namespace_name: str,
  resource_group_name: str,
  id: str = None,
  listen: typing.Union[bool, IResolvable] = None,
  manage: typing.Union[bool, IResolvable] = None,
  send: typing.Union[bool, IResolvable] = None,
  timeouts: DataAzurermEventhubAuthorizationRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#name DataAzurermEventhubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#id DataAzurermEventhubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.listen">listen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#listen DataAzurermEventhubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.manage">manage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#manage DataAzurermEventhubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.send">send</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#send DataAzurermEventhubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#name DataAzurermEventhubAuthorizationRule#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#id DataAzurermEventhubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.listen"></a>

```python
listen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#listen DataAzurermEventhubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.manage"></a>

```python
manage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#manage DataAzurermEventhubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.send"></a>

```python
send: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#send DataAzurermEventhubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.timeouts"></a>

```python
timeouts: DataAzurermEventhubAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#timeouts DataAzurermEventhubAuthorizationRule#timeouts}

---

### DataAzurermEventhubAuthorizationRuleTimeouts <a name="DataAzurermEventhubAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#read DataAzurermEventhubAuthorizationRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/eventhub_authorization_rule#read DataAzurermEventhubAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_authorization_rule

dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermEventhubAuthorizationRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>]

---



