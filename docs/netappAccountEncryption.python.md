# `netappAccountEncryption` Submodule <a name="`netappAccountEncryption` Submodule" id="@cdktf/provider-azurerm.netappAccountEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappAccountEncryption <a name="NetappAccountEncryption" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption azurerm_netapp_account_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryption(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_key: str,
  netapp_account_id: str,
  id: str = None,
  system_assigned_identity_principal_id: str = None,
  timeouts: NetappAccountEncryptionTimeouts = None,
  user_assigned_identity_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.netappAccountId">netapp_account_id</a></code> | <code>str</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.systemAssignedIdentityPrincipalId">system_assigned_identity_principal_id</a></code> | <code>str</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.encryptionKey"></a>

- *Type:* str

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#encryption_key NetappAccountEncryption#encryption_key}

---

##### `netapp_account_id`<sup>Required</sup> <a name="netapp_account_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.netappAccountId"></a>

- *Type:* str

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#netapp_account_id NetappAccountEncryption#netapp_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `system_assigned_identity_principal_id`<sup>Optional</sup> <a name="system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.systemAssignedIdentityPrincipalId"></a>

- *Type:* str

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#system_assigned_identity_principal_id NetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#timeouts NetappAccountEncryption#timeouts}

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.userAssignedIdentityId"></a>

- *Type:* str

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#user_assigned_identity_id NetappAccountEncryption#user_assigned_identity_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetSystemAssignedIdentityPrincipalId">reset_system_assigned_identity_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_system_assigned_identity_principal_id` <a name="reset_system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetSystemAssignedIdentityPrincipalId"></a>

```python
def reset_system_assigned_identity_principal_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryption.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryption.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryption.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryption.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappAccountEncryption to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappAccountEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappAccountEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference">NetappAccountEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountIdInput">netapp_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput">system_assigned_identity_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountId">netapp_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalId">system_assigned_identity_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeouts"></a>

```python
timeouts: NetappAccountEncryptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference">NetappAccountEncryptionTimeoutsOutputReference</a>

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `netapp_account_id_input`<sup>Optional</sup> <a name="netapp_account_id_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountIdInput"></a>

```python
netapp_account_id_input: str
```

- *Type:* str

---

##### `system_assigned_identity_principal_id_input`<sup>Optional</sup> <a name="system_assigned_identity_principal_id_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput"></a>

```python
system_assigned_identity_principal_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappAccountEncryptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>]

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `netapp_account_id`<sup>Required</sup> <a name="netapp_account_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountId"></a>

```python
netapp_account_id: str
```

- *Type:* str

---

##### `system_assigned_identity_principal_id`<sup>Required</sup> <a name="system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalId"></a>

```python
system_assigned_identity_principal_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappAccountEncryptionConfig <a name="NetappAccountEncryptionConfig" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_key: str,
  netapp_account_id: str,
  id: str = None,
  system_assigned_identity_principal_id: str = None,
  timeouts: NetappAccountEncryptionTimeouts = None,
  user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.netappAccountId">netapp_account_id</a></code> | <code>str</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId">system_assigned_identity_principal_id</a></code> | <code>str</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#encryption_key NetappAccountEncryption#encryption_key}

---

##### `netapp_account_id`<sup>Required</sup> <a name="netapp_account_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.netappAccountId"></a>

```python
netapp_account_id: str
```

- *Type:* str

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#netapp_account_id NetappAccountEncryption#netapp_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `system_assigned_identity_principal_id`<sup>Optional</sup> <a name="system_assigned_identity_principal_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId"></a>

```python
system_assigned_identity_principal_id: str
```

- *Type:* str

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#system_assigned_identity_principal_id NetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.timeouts"></a>

```python
timeouts: NetappAccountEncryptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#timeouts NetappAccountEncryption#timeouts}

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#user_assigned_identity_id NetappAccountEncryption#user_assigned_identity_id}

---

### NetappAccountEncryptionTimeouts <a name="NetappAccountEncryptionTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappAccountEncryptionTimeoutsOutputReference <a name="NetappAccountEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_account_encryption

netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappAccountEncryptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>]

---



