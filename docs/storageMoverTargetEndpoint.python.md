# `azurerm_storage_mover_target_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_storage_mover_target_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint).

# `storageMoverTargetEndpoint` Submodule <a name="`storageMoverTargetEndpoint` Submodule" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageMoverTargetEndpoint <a name="StorageMoverTargetEndpoint" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint azurerm_storage_mover_target_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpoint(
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
  storage_account_id: str,
  storage_container_name: str,
  storage_mover_id: str,
  description: str = None,
  id: str = None,
  timeouts: StorageMoverTargetEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#name StorageMoverTargetEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_account_id StorageMoverTargetEndpoint#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.storageContainerName">storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_container_name StorageMoverTargetEndpoint#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.storageMoverId">storage_mover_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_mover_id StorageMoverTargetEndpoint#storage_mover_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#description StorageMoverTargetEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#id StorageMoverTargetEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#name StorageMoverTargetEndpoint#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_account_id StorageMoverTargetEndpoint#storage_account_id}.

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.storageContainerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_container_name StorageMoverTargetEndpoint#storage_container_name}.

---

##### `storage_mover_id`<sup>Required</sup> <a name="storage_mover_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.storageMoverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_mover_id StorageMoverTargetEndpoint#storage_mover_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#description StorageMoverTargetEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#id StorageMoverTargetEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#timeouts StorageMoverTargetEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#create StorageMoverTargetEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#delete StorageMoverTargetEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#read StorageMoverTargetEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#update StorageMoverTargetEndpoint#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference">StorageMoverTargetEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageContainerNameInput">storage_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageMoverIdInput">storage_mover_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageContainerName">storage_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageMoverId">storage_mover_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.timeouts"></a>

```python
timeouts: StorageMoverTargetEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference">StorageMoverTargetEndpointTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `storage_container_name_input`<sup>Optional</sup> <a name="storage_container_name_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageContainerNameInput"></a>

```python
storage_container_name_input: str
```

- *Type:* str

---

##### `storage_mover_id_input`<sup>Optional</sup> <a name="storage_mover_id_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageMoverIdInput"></a>

```python
storage_mover_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageMoverTargetEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageContainerName"></a>

```python
storage_container_name: str
```

- *Type:* str

---

##### `storage_mover_id`<sup>Required</sup> <a name="storage_mover_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.storageMoverId"></a>

```python
storage_mover_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageMoverTargetEndpointConfig <a name="StorageMoverTargetEndpointConfig" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  storage_account_id: str,
  storage_container_name: str,
  storage_mover_id: str,
  description: str = None,
  id: str = None,
  timeouts: StorageMoverTargetEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#name StorageMoverTargetEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_account_id StorageMoverTargetEndpoint#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.storageContainerName">storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_container_name StorageMoverTargetEndpoint#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.storageMoverId">storage_mover_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_mover_id StorageMoverTargetEndpoint#storage_mover_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#description StorageMoverTargetEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#id StorageMoverTargetEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#name StorageMoverTargetEndpoint#name}.

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_account_id StorageMoverTargetEndpoint#storage_account_id}.

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.storageContainerName"></a>

```python
storage_container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_container_name StorageMoverTargetEndpoint#storage_container_name}.

---

##### `storage_mover_id`<sup>Required</sup> <a name="storage_mover_id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.storageMoverId"></a>

```python
storage_mover_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#storage_mover_id StorageMoverTargetEndpoint#storage_mover_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#description StorageMoverTargetEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#id StorageMoverTargetEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointConfig.property.timeouts"></a>

```python
timeouts: StorageMoverTargetEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#timeouts StorageMoverTargetEndpoint#timeouts}

---

### StorageMoverTargetEndpointTimeouts <a name="StorageMoverTargetEndpointTimeouts" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#create StorageMoverTargetEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#delete StorageMoverTargetEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#read StorageMoverTargetEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#update StorageMoverTargetEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#create StorageMoverTargetEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#delete StorageMoverTargetEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#read StorageMoverTargetEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/storage_mover_target_endpoint#update StorageMoverTargetEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageMoverTargetEndpointTimeoutsOutputReference <a name="StorageMoverTargetEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_mover_target_endpoint

storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageMoverTargetEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageMoverTargetEndpoint.StorageMoverTargetEndpointTimeouts">StorageMoverTargetEndpointTimeouts</a>]

---



