# `data_azurerm_netapp_snapshot_policy`

Refer to the Terraform Registory for docs: [`data_azurerm_netapp_snapshot_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy).

# `dataAzurermNetappSnapshotPolicy` Submodule <a name="`dataAzurermNetappSnapshotPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappSnapshotPolicy <a name="DataAzurermNetappSnapshotPolicy" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy azurerm_netapp_snapshot_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermNetappSnapshotPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#account_name DataAzurermNetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#name DataAzurermNetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#resource_group_name DataAzurermNetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#id DataAzurermNetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#account_name DataAzurermNetappSnapshotPolicy#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#name DataAzurermNetappSnapshotPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#resource_group_name DataAzurermNetappSnapshotPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#id DataAzurermNetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#timeouts DataAzurermNetappSnapshotPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#read DataAzurermNetappSnapshotPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList">DataAzurermNetappSnapshotPolicyDailyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList">DataAzurermNetappSnapshotPolicyHourlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList">DataAzurermNetappSnapshotPolicyMonthlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference">DataAzurermNetappSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList">DataAzurermNetappSnapshotPolicyWeeklyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `daily_schedule`<sup>Required</sup> <a name="daily_schedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dailySchedule"></a>

```python
daily_schedule: DataAzurermNetappSnapshotPolicyDailyScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList">DataAzurermNetappSnapshotPolicyDailyScheduleList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hourly_schedule`<sup>Required</sup> <a name="hourly_schedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.hourlySchedule"></a>

```python
hourly_schedule: DataAzurermNetappSnapshotPolicyHourlyScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList">DataAzurermNetappSnapshotPolicyHourlyScheduleList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `monthly_schedule`<sup>Required</sup> <a name="monthly_schedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.monthlySchedule"></a>

```python
monthly_schedule: DataAzurermNetappSnapshotPolicyMonthlyScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList">DataAzurermNetappSnapshotPolicyMonthlyScheduleList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeouts"></a>

```python
timeouts: DataAzurermNetappSnapshotPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference">DataAzurermNetappSnapshotPolicyTimeoutsOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.weeklySchedule"></a>

```python
weekly_schedule: DataAzurermNetappSnapshotPolicyWeeklyScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList">DataAzurermNetappSnapshotPolicyWeeklyScheduleList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermNetappSnapshotPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappSnapshotPolicyConfig <a name="DataAzurermNetappSnapshotPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermNetappSnapshotPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#account_name DataAzurermNetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#name DataAzurermNetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#resource_group_name DataAzurermNetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#id DataAzurermNetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#account_name DataAzurermNetappSnapshotPolicy#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#name DataAzurermNetappSnapshotPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#resource_group_name DataAzurermNetappSnapshotPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#id DataAzurermNetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetappSnapshotPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#timeouts DataAzurermNetappSnapshotPolicy#timeouts}

---

### DataAzurermNetappSnapshotPolicyDailySchedule <a name="DataAzurermNetappSnapshotPolicyDailySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule()
```


### DataAzurermNetappSnapshotPolicyHourlySchedule <a name="DataAzurermNetappSnapshotPolicyHourlySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule()
```


### DataAzurermNetappSnapshotPolicyMonthlySchedule <a name="DataAzurermNetappSnapshotPolicyMonthlySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule()
```


### DataAzurermNetappSnapshotPolicyTimeouts <a name="DataAzurermNetappSnapshotPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#read DataAzurermNetappSnapshotPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/netapp_snapshot_policy#read DataAzurermNetappSnapshotPolicy#read}.

---

### DataAzurermNetappSnapshotPolicyWeeklySchedule <a name="DataAzurermNetappSnapshotPolicyWeeklySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappSnapshotPolicyDailyScheduleList <a name="DataAzurermNetappSnapshotPolicyDailyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule">DataAzurermNetappSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule">DataAzurermNetappSnapshotPolicyDailySchedule</a>

---


### DataAzurermNetappSnapshotPolicyHourlyScheduleList <a name="DataAzurermNetappSnapshotPolicyHourlyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule">DataAzurermNetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule">DataAzurermNetappSnapshotPolicyHourlySchedule</a>

---


### DataAzurermNetappSnapshotPolicyMonthlyScheduleList <a name="DataAzurermNetappSnapshotPolicyMonthlyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule">DataAzurermNetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule">DataAzurermNetappSnapshotPolicyMonthlySchedule</a>

---


### DataAzurermNetappSnapshotPolicyTimeoutsOutputReference <a name="DataAzurermNetappSnapshotPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermNetappSnapshotPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>]

---


### DataAzurermNetappSnapshotPolicyWeeklyScheduleList <a name="DataAzurermNetappSnapshotPolicyWeeklyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_snapshot_policy

dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule">DataAzurermNetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule">DataAzurermNetappSnapshotPolicyWeeklySchedule</a>

---



