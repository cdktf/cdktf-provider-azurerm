# `dataAzurermStorageManagementPolicy` Submodule <a name="`dataAzurermStorageManagementPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageManagementPolicy <a name="DataAzurermStorageManagementPolicy" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy azurerm_storage_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  id: str = None,
  timeouts: DataAzurermStorageManagementPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#timeouts DataAzurermStorageManagementPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#read DataAzurermStorageManagementPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermStorageManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermStorageManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermStorageManagementPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermStorageManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList">DataAzurermStorageManagementPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference">DataAzurermStorageManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.rule"></a>

```python
rule: DataAzurermStorageManagementPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList">DataAzurermStorageManagementPolicyRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeouts"></a>

```python
timeouts: DataAzurermStorageManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference">DataAzurermStorageManagementPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermStorageManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageManagementPolicyConfig <a name="DataAzurermStorageManagementPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  id: str = None,
  timeouts: DataAzurermStorageManagementPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermStorageManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#timeouts DataAzurermStorageManagementPolicy#timeouts}

---

### DataAzurermStorageManagementPolicyRule <a name="DataAzurermStorageManagementPolicyRule" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule()
```


### DataAzurermStorageManagementPolicyRuleActions <a name="DataAzurermStorageManagementPolicyRuleActions" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions()
```


### DataAzurermStorageManagementPolicyRuleActionsBaseBlob <a name="DataAzurermStorageManagementPolicyRuleActionsBaseBlob" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob()
```


### DataAzurermStorageManagementPolicyRuleActionsSnapshot <a name="DataAzurermStorageManagementPolicyRuleActionsSnapshot" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot()
```


### DataAzurermStorageManagementPolicyRuleActionsVersion <a name="DataAzurermStorageManagementPolicyRuleActionsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion()
```


### DataAzurermStorageManagementPolicyRuleFilters <a name="DataAzurermStorageManagementPolicyRuleFilters" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters()
```


### DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag <a name="DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag()
```


### DataAzurermStorageManagementPolicyTimeouts <a name="DataAzurermStorageManagementPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#read DataAzurermStorageManagementPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/storage_management_policy#read DataAzurermStorageManagementPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageManagementPolicyRuleActionsBaseBlobList <a name="DataAzurermStorageManagementPolicyRuleActionsBaseBlobList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled">auto_tier_to_hot_from_cool_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">delete_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan">delete_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan">delete_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan">tier_to_archive_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">tier_to_archive_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan">tier_to_archive_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">tier_to_cold_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan">tier_to_cold_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThan">tier_to_cold_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan">tier_to_cool_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan">tier_to_cool_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan">tier_to_cool_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob">DataAzurermStorageManagementPolicyRuleActionsBaseBlob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_tier_to_hot_from_cool_enabled`<sup>Required</sup> <a name="auto_tier_to_hot_from_cool_enabled" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled"></a>

```python
auto_tier_to_hot_from_cool_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `delete_after_days_since_creation_greater_than`<sup>Required</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```python
delete_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="delete_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
delete_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_modification_greater_than`<sup>Required</sup> <a name="delete_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan"></a>

```python
delete_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_archive_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_modification_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_archive_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cold_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_cold_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_cold_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cold_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="tier_to_cold_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_cold_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cold_after_days_since_modification_greater_than`<sup>Required</sup> <a name="tier_to_cold_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_cold_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_cool_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_cool_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="tier_to_cool_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_cool_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_modification_greater_than`<sup>Required</sup> <a name="tier_to_cool_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_cool_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob">DataAzurermStorageManagementPolicyRuleActionsBaseBlob</a>

---


### DataAzurermStorageManagementPolicyRuleActionsList <a name="DataAzurermStorageManagementPolicyRuleActionsList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleActionsOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.baseBlob">base_blob</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList">DataAzurermStorageManagementPolicyRuleActionsBaseBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList">DataAzurermStorageManagementPolicyRuleActionsSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.version">version</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList">DataAzurermStorageManagementPolicyRuleActionsVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions">DataAzurermStorageManagementPolicyRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_blob`<sup>Required</sup> <a name="base_blob" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.baseBlob"></a>

```python
base_blob: DataAzurermStorageManagementPolicyRuleActionsBaseBlobList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList">DataAzurermStorageManagementPolicyRuleActionsBaseBlobList</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.snapshot"></a>

```python
snapshot: DataAzurermStorageManagementPolicyRuleActionsSnapshotList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList">DataAzurermStorageManagementPolicyRuleActionsSnapshotList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.version"></a>

```python
version: DataAzurermStorageManagementPolicyRuleActionsVersionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList">DataAzurermStorageManagementPolicyRuleActionsVersionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions">DataAzurermStorageManagementPolicyRuleActions</a>

---


### DataAzurermStorageManagementPolicyRuleActionsSnapshotList <a name="DataAzurermStorageManagementPolicyRuleActionsSnapshotList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">change_tier_to_archive_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation">change_tier_to_cool_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">delete_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">tier_to_cold_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot">DataAzurermStorageManagementPolicyRuleActionsSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_tier_to_archive_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```python
change_tier_to_archive_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_cool_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```python
change_tier_to_cool_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_creation_greater_than`<sup>Required</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```python
delete_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cold_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_cold_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_cold_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot">DataAzurermStorageManagementPolicyRuleActionsSnapshot</a>

---


### DataAzurermStorageManagementPolicyRuleActionsVersionList <a name="DataAzurermStorageManagementPolicyRuleActionsVersionList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">change_tier_to_archive_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation">change_tier_to_cool_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation">delete_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">tier_to_cold_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion">DataAzurermStorageManagementPolicyRuleActionsVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_tier_to_archive_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```python
change_tier_to_archive_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_cool_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```python
change_tier_to_cool_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_creation`<sup>Required</sup> <a name="delete_after_days_since_creation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation"></a>

```python
delete_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cold_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_cold_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_cold_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion">DataAzurermStorageManagementPolicyRuleActionsVersion</a>

---


### DataAzurermStorageManagementPolicyRuleFiltersList <a name="DataAzurermStorageManagementPolicyRuleFiltersList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList <a name="DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference <a name="DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>

---


### DataAzurermStorageManagementPolicyRuleFiltersOutputReference <a name="DataAzurermStorageManagementPolicyRuleFiltersOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.blobTypes">blob_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag">match_blob_index_tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch">prefix_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters">DataAzurermStorageManagementPolicyRuleFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blob_types`<sup>Required</sup> <a name="blob_types" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.blobTypes"></a>

```python
blob_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_blob_index_tag`<sup>Required</sup> <a name="match_blob_index_tag" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag"></a>

```python
match_blob_index_tag: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a>

---

##### `prefix_match`<sup>Required</sup> <a name="prefix_match" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch"></a>

```python
prefix_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters">DataAzurermStorageManagementPolicyRuleFilters</a>

---


### DataAzurermStorageManagementPolicyRuleList <a name="DataAzurermStorageManagementPolicyRuleList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermStorageManagementPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermStorageManagementPolicyRuleOutputReference <a name="DataAzurermStorageManagementPolicyRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList">DataAzurermStorageManagementPolicyRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList">DataAzurermStorageManagementPolicyRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule">DataAzurermStorageManagementPolicyRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.actions"></a>

```python
actions: DataAzurermStorageManagementPolicyRuleActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList">DataAzurermStorageManagementPolicyRuleActionsList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.filters"></a>

```python
filters: DataAzurermStorageManagementPolicyRuleFiltersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList">DataAzurermStorageManagementPolicyRuleFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageManagementPolicyRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule">DataAzurermStorageManagementPolicyRule</a>

---


### DataAzurermStorageManagementPolicyTimeoutsOutputReference <a name="DataAzurermStorageManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_management_policy

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermStorageManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>]

---



