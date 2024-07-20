# `mediaServicesAccount` Submodule <a name="`mediaServicesAccount` Submodule" id="@cdktf/provider-azurerm.mediaServicesAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesAccount <a name="MediaServicesAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account azurerm_media_services_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  storage_account: typing.Union[IResolvable, typing.List[MediaServicesAccountStorageAccount]],
  encryption: MediaServicesAccountEncryption = None,
  id: str = None,
  identity: MediaServicesAccountIdentity = None,
  key_delivery_access_control: MediaServicesAccountKeyDeliveryAccessControl = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  storage_authentication_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MediaServicesAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#location MediaServicesAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#name MediaServicesAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.keyDeliveryAccessControl">key_delivery_access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | key_delivery_access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAuthenticationType">storage_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#location MediaServicesAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#name MediaServicesAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}.

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#storage_account MediaServicesAccount#storage_account}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#encryption MediaServicesAccount#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#identity MediaServicesAccount#identity}

---

##### `key_delivery_access_control`<sup>Optional</sup> <a name="key_delivery_access_control" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.keyDeliveryAccessControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

key_delivery_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}.

---

##### `storage_authentication_type`<sup>Optional</sup> <a name="storage_authentication_type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAuthenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#timeouts MediaServicesAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl">put_key_delivery_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetKeyDeliveryAccessControl">reset_key_delivery_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetStorageAuthenticationType">reset_storage_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption"></a>

```python
def put_encryption(
  key_vault_key_identifier: str = None,
  managed_identity: MediaServicesAccountEncryptionManagedIdentity = None,
  type: str = None
) -> None
```

###### `key_vault_key_identifier`<sup>Optional</sup> <a name="key_vault_key_identifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption.parameter.keyVaultKeyIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}.

---

###### `managed_identity`<sup>Optional</sup> <a name="managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption.parameter.managedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#type MediaServicesAccount#type}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#type MediaServicesAccount#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#identity_ids MediaServicesAccount#identity_ids}.

---

##### `put_key_delivery_access_control` <a name="put_key_delivery_access_control" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl"></a>

```python
def put_key_delivery_access_control(
  default_action: str = None,
  ip_allow_list: typing.List[str] = None
) -> None
```

###### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#default_action MediaServicesAccount#default_action}.

---

###### `ip_allow_list`<sup>Optional</sup> <a name="ip_allow_list" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl.parameter.ipAllowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[MediaServicesAccountStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#create MediaServicesAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#delete MediaServicesAccount#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#read MediaServicesAccount#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#update MediaServicesAccount#update}.

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_delivery_access_control` <a name="reset_key_delivery_access_control" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetKeyDeliveryAccessControl"></a>

```python
def reset_key_delivery_access_control() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_storage_authentication_type` <a name="reset_storage_authentication_type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetStorageAuthenticationType"></a>

```python
def reset_storage_authentication_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaServicesAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaServicesAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaServicesAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaServicesAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference">MediaServicesAccountEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference">MediaServicesAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControl">key_delivery_access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference">MediaServicesAccountKeyDeliveryAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList">MediaServicesAccountStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference">MediaServicesAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControlInput">key_delivery_access_control_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationTypeInput">storage_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationType">storage_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryption"></a>

```python
encryption: MediaServicesAccountEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference">MediaServicesAccountEncryptionOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identity"></a>

```python
identity: MediaServicesAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference">MediaServicesAccountIdentityOutputReference</a>

---

##### `key_delivery_access_control`<sup>Required</sup> <a name="key_delivery_access_control" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControl"></a>

```python
key_delivery_access_control: MediaServicesAccountKeyDeliveryAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference">MediaServicesAccountKeyDeliveryAccessControlOutputReference</a>

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccount"></a>

```python
storage_account: MediaServicesAccountStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList">MediaServicesAccountStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeouts"></a>

```python
timeouts: MediaServicesAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference">MediaServicesAccountTimeoutsOutputReference</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryptionInput"></a>

```python
encryption_input: MediaServicesAccountEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identityInput"></a>

```python
identity_input: MediaServicesAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_delivery_access_control_input`<sup>Optional</sup> <a name="key_delivery_access_control_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControlInput"></a>

```python
key_delivery_access_control_input: MediaServicesAccountKeyDeliveryAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[MediaServicesAccountStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]

---

##### `storage_authentication_type_input`<sup>Optional</sup> <a name="storage_authentication_type_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationTypeInput"></a>

```python
storage_authentication_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaServicesAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_authentication_type`<sup>Required</sup> <a name="storage_authentication_type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationType"></a>

```python
storage_authentication_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesAccountConfig <a name="MediaServicesAccountConfig" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  storage_account: typing.Union[IResolvable, typing.List[MediaServicesAccountStorageAccount]],
  encryption: MediaServicesAccountEncryption = None,
  id: str = None,
  identity: MediaServicesAccountIdentity = None,
  key_delivery_access_control: MediaServicesAccountKeyDeliveryAccessControl = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  storage_authentication_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MediaServicesAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#location MediaServicesAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#name MediaServicesAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.keyDeliveryAccessControl">key_delivery_access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | key_delivery_access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAuthenticationType">storage_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#location MediaServicesAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#name MediaServicesAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}.

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[MediaServicesAccountStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#storage_account MediaServicesAccount#storage_account}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.encryption"></a>

```python
encryption: MediaServicesAccountEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#encryption MediaServicesAccount#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.identity"></a>

```python
identity: MediaServicesAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#identity MediaServicesAccount#identity}

---

##### `key_delivery_access_control`<sup>Optional</sup> <a name="key_delivery_access_control" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.keyDeliveryAccessControl"></a>

```python
key_delivery_access_control: MediaServicesAccountKeyDeliveryAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

key_delivery_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}.

---

##### `storage_authentication_type`<sup>Optional</sup> <a name="storage_authentication_type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAuthenticationType"></a>

```python
storage_authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.timeouts"></a>

```python
timeouts: MediaServicesAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#timeouts MediaServicesAccount#timeouts}

---

### MediaServicesAccountEncryption <a name="MediaServicesAccountEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountEncryption(
  key_vault_key_identifier: str = None,
  managed_identity: MediaServicesAccountEncryptionManagedIdentity = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.keyVaultKeyIdentifier">key_vault_key_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.managedIdentity">managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#type MediaServicesAccount#type}. |

---

##### `key_vault_key_identifier`<sup>Optional</sup> <a name="key_vault_key_identifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.keyVaultKeyIdentifier"></a>

```python
key_vault_key_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}.

---

##### `managed_identity`<sup>Optional</sup> <a name="managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.managedIdentity"></a>

```python
managed_identity: MediaServicesAccountEncryptionManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#type MediaServicesAccount#type}.

---

### MediaServicesAccountEncryptionManagedIdentity <a name="MediaServicesAccountEncryptionManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity(
  user_assigned_identity_id: str = None,
  use_system_assigned_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.useSystemAssignedIdentity">use_system_assigned_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}. |

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

##### `use_system_assigned_identity`<sup>Optional</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.useSystemAssignedIdentity"></a>

```python
use_system_assigned_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

### MediaServicesAccountIdentity <a name="MediaServicesAccountIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#type MediaServicesAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#identity_ids MediaServicesAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#type MediaServicesAccount#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#identity_ids MediaServicesAccount#identity_ids}.

---

### MediaServicesAccountKeyDeliveryAccessControl <a name="MediaServicesAccountKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl(
  default_action: str = None,
  ip_allow_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#default_action MediaServicesAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.ipAllowList">ip_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}. |

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#default_action MediaServicesAccount#default_action}.

---

##### `ip_allow_list`<sup>Optional</sup> <a name="ip_allow_list" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.ipAllowList"></a>

```python
ip_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}.

---

### MediaServicesAccountStorageAccount <a name="MediaServicesAccountStorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountStorageAccount(
  id: str,
  is_primary: typing.Union[bool, IResolvable] = None,
  managed_identity: MediaServicesAccountStorageAccountManagedIdentity = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#is_primary MediaServicesAccount#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.managedIdentity">managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | managed_identity block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_primary`<sup>Optional</sup> <a name="is_primary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#is_primary MediaServicesAccount#is_primary}.

---

##### `managed_identity`<sup>Optional</sup> <a name="managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.managedIdentity"></a>

```python
managed_identity: MediaServicesAccountStorageAccountManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

### MediaServicesAccountStorageAccountManagedIdentity <a name="MediaServicesAccountStorageAccountManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity(
  user_assigned_identity_id: str = None,
  use_system_assigned_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.useSystemAssignedIdentity">use_system_assigned_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}. |

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

##### `use_system_assigned_identity`<sup>Optional</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.useSystemAssignedIdentity"></a>

```python
use_system_assigned_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

### MediaServicesAccountTimeouts <a name="MediaServicesAccountTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#create MediaServicesAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#delete MediaServicesAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#read MediaServicesAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#update MediaServicesAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#create MediaServicesAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#delete MediaServicesAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#read MediaServicesAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#update MediaServicesAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesAccountEncryptionManagedIdentityOutputReference <a name="MediaServicesAccountEncryptionManagedIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUseSystemAssignedIdentity">reset_use_system_assigned_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

##### `reset_use_system_assigned_identity` <a name="reset_use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUseSystemAssignedIdentity"></a>

```python
def reset_use_system_assigned_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentityInput">use_system_assigned_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentity">use_system_assigned_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `use_system_assigned_identity_input`<sup>Optional</sup> <a name="use_system_assigned_identity_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentityInput"></a>

```python
use_system_assigned_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `use_system_assigned_identity`<sup>Required</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentity"></a>

```python
use_system_assigned_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesAccountEncryptionManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---


### MediaServicesAccountEncryptionOutputReference <a name="MediaServicesAccountEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity">put_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetKeyVaultKeyIdentifier">reset_key_vault_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetManagedIdentity">reset_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_identity` <a name="put_managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity"></a>

```python
def put_managed_identity(
  user_assigned_identity_id: str = None,
  use_system_assigned_identity: typing.Union[bool, IResolvable] = None
) -> None
```

###### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity.parameter.userAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

###### `use_system_assigned_identity`<sup>Optional</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity.parameter.useSystemAssignedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

##### `reset_key_vault_key_identifier` <a name="reset_key_vault_key_identifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetKeyVaultKeyIdentifier"></a>

```python
def reset_key_vault_key_identifier() -> None
```

##### `reset_managed_identity` <a name="reset_managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetManagedIdentity"></a>

```python
def reset_managed_identity() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.currentKeyIdentifier">current_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentity">managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference">MediaServicesAccountEncryptionManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifierInput">key_vault_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentityInput">managed_identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifier">key_vault_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_key_identifier`<sup>Required</sup> <a name="current_key_identifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.currentKeyIdentifier"></a>

```python
current_key_identifier: str
```

- *Type:* str

---

##### `managed_identity`<sup>Required</sup> <a name="managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentity"></a>

```python
managed_identity: MediaServicesAccountEncryptionManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference">MediaServicesAccountEncryptionManagedIdentityOutputReference</a>

---

##### `key_vault_key_identifier_input`<sup>Optional</sup> <a name="key_vault_key_identifier_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifierInput"></a>

```python
key_vault_key_identifier_input: str
```

- *Type:* str

---

##### `managed_identity_input`<sup>Optional</sup> <a name="managed_identity_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentityInput"></a>

```python
managed_identity_input: MediaServicesAccountEncryptionManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `key_vault_key_identifier`<sup>Required</sup> <a name="key_vault_key_identifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifier"></a>

```python
key_vault_key_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesAccountEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---


### MediaServicesAccountIdentityOutputReference <a name="MediaServicesAccountIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---


### MediaServicesAccountKeyDeliveryAccessControlOutputReference <a name="MediaServicesAccountKeyDeliveryAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetIpAllowList">reset_ip_allow_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_ip_allow_list` <a name="reset_ip_allow_list" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetIpAllowList"></a>

```python
def reset_ip_allow_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowListInput">ip_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowList">ip_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `ip_allow_list_input`<sup>Optional</sup> <a name="ip_allow_list_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowListInput"></a>

```python
ip_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `ip_allow_list`<sup>Required</sup> <a name="ip_allow_list" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowList"></a>

```python
ip_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesAccountKeyDeliveryAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---


### MediaServicesAccountStorageAccountList <a name="MediaServicesAccountStorageAccountList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesAccountStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesAccountStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]]

---


### MediaServicesAccountStorageAccountManagedIdentityOutputReference <a name="MediaServicesAccountStorageAccountManagedIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUseSystemAssignedIdentity">reset_use_system_assigned_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

##### `reset_use_system_assigned_identity` <a name="reset_use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUseSystemAssignedIdentity"></a>

```python
def reset_use_system_assigned_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentityInput">use_system_assigned_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentity">use_system_assigned_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `use_system_assigned_identity_input`<sup>Optional</sup> <a name="use_system_assigned_identity_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentityInput"></a>

```python
use_system_assigned_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `use_system_assigned_identity`<sup>Required</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentity"></a>

```python
use_system_assigned_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesAccountStorageAccountManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---


### MediaServicesAccountStorageAccountOutputReference <a name="MediaServicesAccountStorageAccountOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity">put_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetIsPrimary">reset_is_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetManagedIdentity">reset_managed_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_identity` <a name="put_managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity"></a>

```python
def put_managed_identity(
  user_assigned_identity_id: str = None,
  use_system_assigned_identity: typing.Union[bool, IResolvable] = None
) -> None
```

###### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity.parameter.userAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

###### `use_system_assigned_identity`<sup>Optional</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity.parameter.useSystemAssignedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

##### `reset_is_primary` <a name="reset_is_primary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetIsPrimary"></a>

```python
def reset_is_primary() -> None
```

##### `reset_managed_identity` <a name="reset_managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetManagedIdentity"></a>

```python
def reset_managed_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentity">managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference">MediaServicesAccountStorageAccountManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimaryInput">is_primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentityInput">managed_identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_identity`<sup>Required</sup> <a name="managed_identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentity"></a>

```python
managed_identity: MediaServicesAccountStorageAccountManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference">MediaServicesAccountStorageAccountManagedIdentityOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_primary_input`<sup>Optional</sup> <a name="is_primary_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimaryInput"></a>

```python
is_primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_identity_input`<sup>Optional</sup> <a name="managed_identity_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentityInput"></a>

```python
managed_identity_input: MediaServicesAccountStorageAccountManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesAccountStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>]

---


### MediaServicesAccountTimeoutsOutputReference <a name="MediaServicesAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account

mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>]

---



