# `data_azurerm_backup_policy_vm`

Refer to the Terraform Registory for docs: [`data_azurerm_backup_policy_vm`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm).

# `dataAzurermBackupPolicyVm` Submodule <a name="`dataAzurermBackupPolicyVm` Submodule" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBackupPolicyVm <a name="DataAzurermBackupPolicyVm" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm azurerm_backup_policy_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm(
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
  recovery_vault_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermBackupPolicyVmTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#name DataAzurermBackupPolicyVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#recovery_vault_name DataAzurermBackupPolicyVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#resource_group_name DataAzurermBackupPolicyVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#id DataAzurermBackupPolicyVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#name DataAzurermBackupPolicyVm#name}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#recovery_vault_name DataAzurermBackupPolicyVm#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#resource_group_name DataAzurermBackupPolicyVm#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#id DataAzurermBackupPolicyVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#timeouts DataAzurermBackupPolicyVm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#read DataAzurermBackupPolicyVm#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference">DataAzurermBackupPolicyVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.timeouts"></a>

```python
timeouts: DataAzurermBackupPolicyVmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference">DataAzurermBackupPolicyVmTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermBackupPolicyVmTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBackupPolicyVmConfig <a name="DataAzurermBackupPolicyVmConfig" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  recovery_vault_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermBackupPolicyVmTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#name DataAzurermBackupPolicyVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#recovery_vault_name DataAzurermBackupPolicyVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#resource_group_name DataAzurermBackupPolicyVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#id DataAzurermBackupPolicyVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#name DataAzurermBackupPolicyVm#name}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#recovery_vault_name DataAzurermBackupPolicyVm#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#resource_group_name DataAzurermBackupPolicyVm#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#id DataAzurermBackupPolicyVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmConfig.property.timeouts"></a>

```python
timeouts: DataAzurermBackupPolicyVmTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#timeouts DataAzurermBackupPolicyVm#timeouts}

---

### DataAzurermBackupPolicyVmTimeouts <a name="DataAzurermBackupPolicyVmTimeouts" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#read DataAzurermBackupPolicyVm#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/backup_policy_vm#read DataAzurermBackupPolicyVm#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBackupPolicyVmTimeoutsOutputReference <a name="DataAzurermBackupPolicyVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_backup_policy_vm

dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermBackupPolicyVmTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBackupPolicyVm.DataAzurermBackupPolicyVmTimeouts">DataAzurermBackupPolicyVmTimeouts</a>, cdktf.IResolvable]

---



