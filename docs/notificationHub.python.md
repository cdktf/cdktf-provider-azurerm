# `azurerm_notification_hub`

Refer to the Terraform Registory for docs: [`azurerm_notification_hub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub).

# `notificationHub` Submodule <a name="`notificationHub` Submodule" id="@cdktf/provider-azurerm.notificationHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationHub <a name="NotificationHub" id="@cdktf/provider-azurerm.notificationHub.NotificationHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub azurerm_notification_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHub(
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
  namespace_name: str,
  resource_group_name: str,
  apns_credential: NotificationHubApnsCredential = None,
  gcm_credential: NotificationHubGcmCredential = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NotificationHubTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#location NotificationHub#location}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#name NotificationHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#namespace_name NotificationHub#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#resource_group_name NotificationHub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.apnsCredential">apns_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a></code> | apns_credential block. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.gcmCredential">gcm_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a></code> | gcm_credential block. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#id NotificationHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#tags NotificationHub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#location NotificationHub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#name NotificationHub#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#namespace_name NotificationHub#namespace_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#resource_group_name NotificationHub#resource_group_name}.

---

##### `apns_credential`<sup>Optional</sup> <a name="apns_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.apnsCredential"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a>

apns_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#apns_credential NotificationHub#apns_credential}

---

##### `gcm_credential`<sup>Optional</sup> <a name="gcm_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.gcmCredential"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a>

gcm_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#gcm_credential NotificationHub#gcm_credential}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#id NotificationHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#tags NotificationHub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#timeouts NotificationHub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential">put_apns_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.putGcmCredential">put_gcm_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.resetApnsCredential">reset_apns_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.resetGcmCredential">reset_gcm_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_apns_credential` <a name="put_apns_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential"></a>

```python
def put_apns_credential(
  application_mode: str,
  bundle_id: str,
  key_id: str,
  team_id: str,
  token: str
) -> None
```

###### `application_mode`<sup>Required</sup> <a name="application_mode" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential.parameter.applicationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#application_mode NotificationHub#application_mode}.

---

###### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#bundle_id NotificationHub#bundle_id}.

---

###### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#key_id NotificationHub#key_id}.

---

###### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#team_id NotificationHub#team_id}.

---

###### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putApnsCredential.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#token NotificationHub#token}.

---

##### `put_gcm_credential` <a name="put_gcm_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putGcmCredential"></a>

```python
def put_gcm_credential(
  api_key: str
) -> None
```

###### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putGcmCredential.parameter.apiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#api_key NotificationHub#api_key}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#create NotificationHub#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#delete NotificationHub#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#read NotificationHub#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#update NotificationHub#update}.

---

##### `reset_apns_credential` <a name="reset_apns_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.resetApnsCredential"></a>

```python
def reset_apns_credential() -> None
```

##### `reset_gcm_credential` <a name="reset_gcm_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.resetGcmCredential"></a>

```python
def reset_gcm_credential() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.apnsCredential">apns_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference">NotificationHubApnsCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.gcmCredential">gcm_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference">NotificationHubGcmCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference">NotificationHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.apnsCredentialInput">apns_credential_input</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.gcmCredentialInput">gcm_credential_input</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apns_credential`<sup>Required</sup> <a name="apns_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.apnsCredential"></a>

```python
apns_credential: NotificationHubApnsCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference">NotificationHubApnsCredentialOutputReference</a>

---

##### `gcm_credential`<sup>Required</sup> <a name="gcm_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.gcmCredential"></a>

```python
gcm_credential: NotificationHubGcmCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference">NotificationHubGcmCredentialOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.timeouts"></a>

```python
timeouts: NotificationHubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference">NotificationHubTimeoutsOutputReference</a>

---

##### `apns_credential_input`<sup>Optional</sup> <a name="apns_credential_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.apnsCredentialInput"></a>

```python
apns_credential_input: NotificationHubApnsCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a>

---

##### `gcm_credential_input`<sup>Optional</sup> <a name="gcm_credential_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.gcmCredentialInput"></a>

```python
gcm_credential_input: NotificationHubGcmCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NotificationHubTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.notificationHub.NotificationHub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationHubApnsCredential <a name="NotificationHubApnsCredential" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubApnsCredential(
  application_mode: str,
  bundle_id: str,
  key_id: str,
  team_id: str,
  token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.applicationMode">application_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#application_mode NotificationHub#application_mode}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#bundle_id NotificationHub#bundle_id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#key_id NotificationHub#key_id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#team_id NotificationHub#team_id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#token NotificationHub#token}. |

---

##### `application_mode`<sup>Required</sup> <a name="application_mode" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.applicationMode"></a>

```python
application_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#application_mode NotificationHub#application_mode}.

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#bundle_id NotificationHub#bundle_id}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#key_id NotificationHub#key_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#team_id NotificationHub#team_id}.

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#token NotificationHub#token}.

---

### NotificationHubConfig <a name="NotificationHubConfig" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  namespace_name: str,
  resource_group_name: str,
  apns_credential: NotificationHubApnsCredential = None,
  gcm_credential: NotificationHubGcmCredential = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NotificationHubTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#location NotificationHub#location}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#name NotificationHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#namespace_name NotificationHub#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#resource_group_name NotificationHub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.apnsCredential">apns_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a></code> | apns_credential block. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.gcmCredential">gcm_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a></code> | gcm_credential block. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#id NotificationHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#tags NotificationHub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#location NotificationHub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#name NotificationHub#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#namespace_name NotificationHub#namespace_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#resource_group_name NotificationHub#resource_group_name}.

---

##### `apns_credential`<sup>Optional</sup> <a name="apns_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.apnsCredential"></a>

```python
apns_credential: NotificationHubApnsCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a>

apns_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#apns_credential NotificationHub#apns_credential}

---

##### `gcm_credential`<sup>Optional</sup> <a name="gcm_credential" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.gcmCredential"></a>

```python
gcm_credential: NotificationHubGcmCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a>

gcm_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#gcm_credential NotificationHub#gcm_credential}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#id NotificationHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#tags NotificationHub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHub.NotificationHubConfig.property.timeouts"></a>

```python
timeouts: NotificationHubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#timeouts NotificationHub#timeouts}

---

### NotificationHubGcmCredential <a name="NotificationHubGcmCredential" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubGcmCredential(
  api_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential.property.apiKey">api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#api_key NotificationHub#api_key}. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#api_key NotificationHub#api_key}.

---

### NotificationHubTimeouts <a name="NotificationHubTimeouts" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#create NotificationHub#create}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#delete NotificationHub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#read NotificationHub#read}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#update NotificationHub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#create NotificationHub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#delete NotificationHub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#read NotificationHub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/notification_hub#update NotificationHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationHubApnsCredentialOutputReference <a name="NotificationHubApnsCredentialOutputReference" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubApnsCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.applicationModeInput">application_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.applicationMode">application_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_mode_input`<sup>Optional</sup> <a name="application_mode_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.applicationModeInput"></a>

```python
application_mode_input: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `application_mode`<sup>Required</sup> <a name="application_mode" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.applicationMode"></a>

```python
application_mode: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredentialOutputReference.property.internalValue"></a>

```python
internal_value: NotificationHubApnsCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubApnsCredential">NotificationHubApnsCredential</a>

---


### NotificationHubGcmCredentialOutputReference <a name="NotificationHubGcmCredentialOutputReference" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubGcmCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredentialOutputReference.property.internalValue"></a>

```python
internal_value: NotificationHubGcmCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubGcmCredential">NotificationHubGcmCredential</a>

---


### NotificationHubTimeoutsOutputReference <a name="NotificationHubTimeoutsOutputReference" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import notification_hub

notificationHub.NotificationHubTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.notificationHub.NotificationHubTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NotificationHubTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.notificationHub.NotificationHubTimeouts">NotificationHubTimeouts</a>, cdktf.IResolvable]

---



