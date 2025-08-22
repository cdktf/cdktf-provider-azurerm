# `dataAzurermKeyVaultManagedHardwareSecurityModuleKey` Submodule <a name="`dataAzurermKeyVaultManagedHardwareSecurityModuleKey` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleKey <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key azurerm_key_vault_managed_hardware_security_module_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_hsm_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.managedHsmId">managed_hsm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#name DataAzurermKeyVaultManagedHardwareSecurityModuleKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_hsm_id`<sup>Required</sup> <a name="managed_hsm_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.managedHsmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#name DataAzurermKeyVaultManagedHardwareSecurityModuleKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#timeouts DataAzurermKeyVaultManagedHardwareSecurityModuleKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#read DataAzurermKeyVaultManagedHardwareSecurityModuleKey#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKeyVaultManagedHardwareSecurityModuleKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKeyVaultManagedHardwareSecurityModuleKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultManagedHardwareSecurityModuleKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.curve">curve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyOpts">key_opts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate">not_before_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.versionedId">versioned_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput">managed_hsm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId">managed_hsm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.curve"></a>

```python
curve: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `key_opts`<sup>Required</sup> <a name="key_opts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyOpts"></a>

```python
key_opts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `not_before_date`<sup>Required</sup> <a name="not_before_date" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate"></a>

```python
not_before_date: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `versioned_id`<sup>Required</sup> <a name="versioned_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.versionedId"></a>

```python
versioned_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_hsm_id_input`<sup>Optional</sup> <a name="managed_hsm_id_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput"></a>

```python
managed_hsm_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_hsm_id`<sup>Required</sup> <a name="managed_hsm_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId"></a>

```python
managed_hsm_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_hsm_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId">managed_hsm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#name DataAzurermKeyVaultManagedHardwareSecurityModuleKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_hsm_id`<sup>Required</sup> <a name="managed_hsm_id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId"></a>

```python
managed_hsm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#name DataAzurermKeyVaultManagedHardwareSecurityModuleKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#timeouts DataAzurermKeyVaultManagedHardwareSecurityModuleKey#timeouts}

---

### DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#read DataAzurermKeyVaultManagedHardwareSecurityModuleKey#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/key_vault_managed_hardware_security_module_key#read DataAzurermKeyVaultManagedHardwareSecurityModuleKey#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module_key

dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>]

---



