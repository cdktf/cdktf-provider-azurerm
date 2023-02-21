# `mediaStreamingPolicy` Submodule <a name="`mediaStreamingPolicy` Submodule" id="@cdktf/provider-azurerm.mediaStreamingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingPolicy <a name="MediaStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy azurerm_media_streaming_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  common_encryption_cbcs: MediaStreamingPolicyCommonEncryptionCbcs = None,
  common_encryption_cenc: MediaStreamingPolicyCommonEncryptionCenc = None,
  default_content_key_policy_name: str = None,
  id: str = None,
  no_encryption_enabled_protocols: MediaStreamingPolicyNoEncryptionEnabledProtocols = None,
  timeouts: MediaStreamingPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#name MediaStreamingPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCbcs">common_encryption_cbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | common_encryption_cbcs block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCenc">common_encryption_cenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | common_encryption_cenc block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.defaultContentKeyPolicyName">default_content_key_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#id MediaStreamingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.noEncryptionEnabledProtocols">no_encryption_enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | no_encryption_enabled_protocols block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#name MediaStreamingPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}.

---

##### `common_encryption_cbcs`<sup>Optional</sup> <a name="common_encryption_cbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCbcs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

common_encryption_cbcs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}

---

##### `common_encryption_cenc`<sup>Optional</sup> <a name="common_encryption_cenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.commonEncryptionCenc"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

common_encryption_cenc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}

---

##### `default_content_key_policy_name`<sup>Optional</sup> <a name="default_content_key_policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.defaultContentKeyPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#id MediaStreamingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_encryption_enabled_protocols`<sup>Optional</sup> <a name="no_encryption_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.noEncryptionEnabledProtocols"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

no_encryption_enabled_protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#timeouts MediaStreamingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs">put_common_encryption_cbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc">put_common_encryption_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols">put_no_encryption_enabled_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCbcs">reset_common_encryption_cbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCenc">reset_common_encryption_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetDefaultContentKeyPolicyName">reset_default_content_key_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetNoEncryptionEnabledProtocols">reset_no_encryption_enabled_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_common_encryption_cbcs` <a name="put_common_encryption_cbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs"></a>

```python
def put_common_encryption_cbcs(
  default_content_key: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey = None,
  drm_fairplay: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay = None,
  enabled_protocols: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols = None
) -> None
```

###### `default_content_key`<sup>Optional</sup> <a name="default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs.parameter.defaultContentKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

###### `drm_fairplay`<sup>Optional</sup> <a name="drm_fairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs.parameter.drmFairplay"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

drm_fairplay block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_fairplay MediaStreamingPolicy#drm_fairplay}

---

###### `enabled_protocols`<sup>Optional</sup> <a name="enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs.parameter.enabledProtocols"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

##### `put_common_encryption_cenc` <a name="put_common_encryption_cenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc"></a>

```python
def put_common_encryption_cenc(
  default_content_key: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey = None,
  drm_playready: MediaStreamingPolicyCommonEncryptionCencDrmPlayready = None,
  drm_widevine_custom_license_acquisition_url_template: str = None,
  enabled_protocols: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols = None
) -> None
```

###### `default_content_key`<sup>Optional</sup> <a name="default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc.parameter.defaultContentKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

###### `drm_playready`<sup>Optional</sup> <a name="drm_playready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc.parameter.drmPlayready"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

drm_playready block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_playready MediaStreamingPolicy#drm_playready}

---

###### `drm_widevine_custom_license_acquisition_url_template`<sup>Optional</sup> <a name="drm_widevine_custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc.parameter.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}.

---

###### `enabled_protocols`<sup>Optional</sup> <a name="enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc.parameter.enabledProtocols"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

##### `put_no_encryption_enabled_protocols` <a name="put_no_encryption_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols"></a>

```python
def put_no_encryption_enabled_protocols(
  dash: typing.Union[bool, IResolvable] = None,
  download: typing.Union[bool, IResolvable] = None,
  hls: typing.Union[bool, IResolvable] = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None
) -> None
```

###### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols.parameter.dash"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

###### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols.parameter.download"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}.

---

###### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols.parameter.hls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

###### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols.parameter.smoothStreaming"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#create MediaStreamingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#delete MediaStreamingPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#read MediaStreamingPolicy#read}.

---

##### `reset_common_encryption_cbcs` <a name="reset_common_encryption_cbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCbcs"></a>

```python
def reset_common_encryption_cbcs() -> None
```

##### `reset_common_encryption_cenc` <a name="reset_common_encryption_cenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCenc"></a>

```python
def reset_common_encryption_cenc() -> None
```

##### `reset_default_content_key_policy_name` <a name="reset_default_content_key_policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetDefaultContentKeyPolicyName"></a>

```python
def reset_default_content_key_policy_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_no_encryption_enabled_protocols` <a name="reset_no_encryption_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetNoEncryptionEnabledProtocols"></a>

```python
def reset_no_encryption_enabled_protocols() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcs">common_encryption_cbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCenc">common_encryption_cenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference">MediaStreamingPolicyCommonEncryptionCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocols">no_encryption_enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference">MediaStreamingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcsInput">common_encryption_cbcs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCencInput">common_encryption_cenc_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyNameInput">default_content_key_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountNameInput">media_services_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocolsInput">no_encryption_enabled_protocols_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyName">default_content_key_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `common_encryption_cbcs`<sup>Required</sup> <a name="common_encryption_cbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcs"></a>

```python
common_encryption_cbcs: MediaStreamingPolicyCommonEncryptionCbcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsOutputReference</a>

---

##### `common_encryption_cenc`<sup>Required</sup> <a name="common_encryption_cenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCenc"></a>

```python
common_encryption_cenc: MediaStreamingPolicyCommonEncryptionCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference">MediaStreamingPolicyCommonEncryptionCencOutputReference</a>

---

##### `no_encryption_enabled_protocols`<sup>Required</sup> <a name="no_encryption_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocols"></a>

```python
no_encryption_enabled_protocols: MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeouts"></a>

```python
timeouts: MediaStreamingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference">MediaStreamingPolicyTimeoutsOutputReference</a>

---

##### `common_encryption_cbcs_input`<sup>Optional</sup> <a name="common_encryption_cbcs_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcsInput"></a>

```python
common_encryption_cbcs_input: MediaStreamingPolicyCommonEncryptionCbcs
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---

##### `common_encryption_cenc_input`<sup>Optional</sup> <a name="common_encryption_cenc_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCencInput"></a>

```python
common_encryption_cenc_input: MediaStreamingPolicyCommonEncryptionCenc
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---

##### `default_content_key_policy_name_input`<sup>Optional</sup> <a name="default_content_key_policy_name_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyNameInput"></a>

```python
default_content_key_policy_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `media_services_account_name_input`<sup>Optional</sup> <a name="media_services_account_name_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountNameInput"></a>

```python
media_services_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `no_encryption_enabled_protocols_input`<sup>Optional</sup> <a name="no_encryption_enabled_protocols_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocolsInput"></a>

```python
no_encryption_enabled_protocols_input: MediaStreamingPolicyNoEncryptionEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MediaStreamingPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>, cdktf.IResolvable]

---

##### `default_content_key_policy_name`<sup>Required</sup> <a name="default_content_key_policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyName"></a>

```python
default_content_key_policy_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingPolicyCommonEncryptionCbcs <a name="MediaStreamingPolicyCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs(
  default_content_key: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey = None,
  drm_fairplay: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay = None,
  enabled_protocols: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.defaultContentKey">default_content_key</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.drmFairplay">drm_fairplay</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | drm_fairplay block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.enabledProtocols">enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `default_content_key`<sup>Optional</sup> <a name="default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.defaultContentKey"></a>

```python
default_content_key: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `drm_fairplay`<sup>Optional</sup> <a name="drm_fairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.drmFairplay"></a>

```python
drm_fairplay: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

drm_fairplay block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_fairplay MediaStreamingPolicy#drm_fairplay}

---

##### `enabled_protocols`<sup>Optional</sup> <a name="enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.enabledProtocols"></a>

```python
enabled_protocols: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey <a name="MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey(
  label: str = None,
  policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay <a name="MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay(
  allow_persistent_license: typing.Union[bool, IResolvable] = None,
  custom_license_acquisition_url_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.allowPersistentLicense">allow_persistent_license</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.customLicenseAcquisitionUrlTemplate">custom_license_acquisition_url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}. |

---

##### `allow_persistent_license`<sup>Optional</sup> <a name="allow_persistent_license" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.allowPersistentLicense"></a>

```python
allow_persistent_license: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}.

---

##### `custom_license_acquisition_url_template`<sup>Optional</sup> <a name="custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.customLicenseAcquisitionUrlTemplate"></a>

```python
custom_license_acquisition_url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols <a name="MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols(
  dash: typing.Union[bool, IResolvable] = None,
  download: typing.Union[bool, IResolvable] = None,
  hls: typing.Union[bool, IResolvable] = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.dash">dash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.download">download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.hls">hls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.dash"></a>

```python
dash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.download"></a>

```python
download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.hls"></a>

```python
hls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyCommonEncryptionCenc <a name="MediaStreamingPolicyCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc(
  default_content_key: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey = None,
  drm_playready: MediaStreamingPolicyCommonEncryptionCencDrmPlayready = None,
  drm_widevine_custom_license_acquisition_url_template: str = None,
  enabled_protocols: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.defaultContentKey">default_content_key</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmPlayready">drm_playready</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | drm_playready block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmWidevineCustomLicenseAcquisitionUrlTemplate">drm_widevine_custom_license_acquisition_url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.enabledProtocols">enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `default_content_key`<sup>Optional</sup> <a name="default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.defaultContentKey"></a>

```python
default_content_key: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `drm_playready`<sup>Optional</sup> <a name="drm_playready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmPlayready"></a>

```python
drm_playready: MediaStreamingPolicyCommonEncryptionCencDrmPlayready
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

drm_playready block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_playready MediaStreamingPolicy#drm_playready}

---

##### `drm_widevine_custom_license_acquisition_url_template`<sup>Optional</sup> <a name="drm_widevine_custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```python
drm_widevine_custom_license_acquisition_url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}.

---

##### `enabled_protocols`<sup>Optional</sup> <a name="enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.enabledProtocols"></a>

```python
enabled_protocols: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyCommonEncryptionCencDefaultContentKey <a name="MediaStreamingPolicyCommonEncryptionCencDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey(
  label: str = None,
  policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCencDrmPlayready <a name="MediaStreamingPolicyCommonEncryptionCencDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready(
  custom_attributes: str = None,
  custom_license_acquisition_url_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customAttributes">custom_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customLicenseAcquisitionUrlTemplate">custom_license_acquisition_url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}. |

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customAttributes"></a>

```python
custom_attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}.

---

##### `custom_license_acquisition_url_template`<sup>Optional</sup> <a name="custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customLicenseAcquisitionUrlTemplate"></a>

```python
custom_license_acquisition_url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCencEnabledProtocols <a name="MediaStreamingPolicyCommonEncryptionCencEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols(
  dash: typing.Union[bool, IResolvable] = None,
  download: typing.Union[bool, IResolvable] = None,
  hls: typing.Union[bool, IResolvable] = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.dash">dash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.download">download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.hls">hls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.dash"></a>

```python
dash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.download"></a>

```python
download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.hls"></a>

```python
hls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyConfig <a name="MediaStreamingPolicyConfig" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  common_encryption_cbcs: MediaStreamingPolicyCommonEncryptionCbcs = None,
  common_encryption_cenc: MediaStreamingPolicyCommonEncryptionCenc = None,
  default_content_key_policy_name: str = None,
  id: str = None,
  no_encryption_enabled_protocols: MediaStreamingPolicyNoEncryptionEnabledProtocols = None,
  timeouts: MediaStreamingPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#name MediaStreamingPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCbcs">common_encryption_cbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | common_encryption_cbcs block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCenc">common_encryption_cenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | common_encryption_cenc block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.defaultContentKeyPolicyName">default_content_key_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#id MediaStreamingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.noEncryptionEnabledProtocols">no_encryption_enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | no_encryption_enabled_protocols block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#name MediaStreamingPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}.

---

##### `common_encryption_cbcs`<sup>Optional</sup> <a name="common_encryption_cbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCbcs"></a>

```python
common_encryption_cbcs: MediaStreamingPolicyCommonEncryptionCbcs
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

common_encryption_cbcs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}

---

##### `common_encryption_cenc`<sup>Optional</sup> <a name="common_encryption_cenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCenc"></a>

```python
common_encryption_cenc: MediaStreamingPolicyCommonEncryptionCenc
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

common_encryption_cenc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}

---

##### `default_content_key_policy_name`<sup>Optional</sup> <a name="default_content_key_policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.defaultContentKeyPolicyName"></a>

```python
default_content_key_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#id MediaStreamingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_encryption_enabled_protocols`<sup>Optional</sup> <a name="no_encryption_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.noEncryptionEnabledProtocols"></a>

```python
no_encryption_enabled_protocols: MediaStreamingPolicyNoEncryptionEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

no_encryption_enabled_protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.timeouts"></a>

```python
timeouts: MediaStreamingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#timeouts MediaStreamingPolicy#timeouts}

---

### MediaStreamingPolicyNoEncryptionEnabledProtocols <a name="MediaStreamingPolicyNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols(
  dash: typing.Union[bool, IResolvable] = None,
  download: typing.Union[bool, IResolvable] = None,
  hls: typing.Union[bool, IResolvable] = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.dash">dash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.download">download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.hls">hls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.dash"></a>

```python
dash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.download"></a>

```python
download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.hls"></a>

```python
hls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyTimeouts <a name="MediaStreamingPolicyTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#create MediaStreamingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#delete MediaStreamingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#read MediaStreamingPolicy#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#create MediaStreamingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#delete MediaStreamingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#read MediaStreamingPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetPolicyName">reset_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_policy_name` <a name="reset_policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetPolicyName"></a>

```python
def reset_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetAllowPersistentLicense">reset_allow_persistent_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetCustomLicenseAcquisitionUrlTemplate">reset_custom_license_acquisition_url_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_persistent_license` <a name="reset_allow_persistent_license" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetAllowPersistentLicense"></a>

```python
def reset_allow_persistent_license() -> None
```

##### `reset_custom_license_acquisition_url_template` <a name="reset_custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetCustomLicenseAcquisitionUrlTemplate"></a>

```python
def reset_custom_license_acquisition_url_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicenseInput">allow_persistent_license_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplateInput">custom_license_acquisition_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicense">allow_persistent_license</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplate">custom_license_acquisition_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_persistent_license_input`<sup>Optional</sup> <a name="allow_persistent_license_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicenseInput"></a>

```python
allow_persistent_license_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_license_acquisition_url_template_input`<sup>Optional</sup> <a name="custom_license_acquisition_url_template_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplateInput"></a>

```python
custom_license_acquisition_url_template_input: str
```

- *Type:* str

---

##### `allow_persistent_license`<sup>Required</sup> <a name="allow_persistent_license" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicense"></a>

```python
allow_persistent_license: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_license_acquisition_url_template`<sup>Required</sup> <a name="custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplate"></a>

```python
custom_license_acquisition_url_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDash">reset_dash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDownload">reset_download</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetHls">reset_hls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetSmoothStreaming">reset_smooth_streaming</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dash` <a name="reset_dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDash"></a>

```python
def reset_dash() -> None
```

##### `reset_download` <a name="reset_download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDownload"></a>

```python
def reset_download() -> None
```

##### `reset_hls` <a name="reset_hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetHls"></a>

```python
def reset_hls() -> None
```

##### `reset_smooth_streaming` <a name="reset_smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```python
def reset_smooth_streaming() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dashInput">dash_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.downloadInput">download_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hlsInput">hls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreamingInput">smooth_streaming_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.download">download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash_input`<sup>Optional</sup> <a name="dash_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dashInput"></a>

```python
dash_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `download_input`<sup>Optional</sup> <a name="download_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.downloadInput"></a>

```python
download_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hls_input`<sup>Optional</sup> <a name="hls_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hlsInput"></a>

```python
hls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smooth_streaming_input`<sup>Optional</sup> <a name="smooth_streaming_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```python
smooth_streaming_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dash"></a>

```python
dash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.download"></a>

```python
download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hls"></a>

```python
hls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smooth_streaming`<sup>Required</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey">put_default_content_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay">put_drm_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols">put_enabled_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDefaultContentKey">reset_default_content_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDrmFairplay">reset_drm_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetEnabledProtocols">reset_enabled_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_content_key` <a name="put_default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey"></a>

```python
def put_default_content_key(
  label: str = None,
  policy_name: str = None
) -> None
```

###### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}.

---

###### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey.parameter.policyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

##### `put_drm_fairplay` <a name="put_drm_fairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay"></a>

```python
def put_drm_fairplay(
  allow_persistent_license: typing.Union[bool, IResolvable] = None,
  custom_license_acquisition_url_template: str = None
) -> None
```

###### `allow_persistent_license`<sup>Optional</sup> <a name="allow_persistent_license" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay.parameter.allowPersistentLicense"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}.

---

###### `custom_license_acquisition_url_template`<sup>Optional</sup> <a name="custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay.parameter.customLicenseAcquisitionUrlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

##### `put_enabled_protocols` <a name="put_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols"></a>

```python
def put_enabled_protocols(
  dash: typing.Union[bool, IResolvable] = None,
  download: typing.Union[bool, IResolvable] = None,
  hls: typing.Union[bool, IResolvable] = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None
) -> None
```

###### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols.parameter.dash"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

###### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols.parameter.download"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}.

---

###### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols.parameter.hls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

###### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols.parameter.smoothStreaming"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

##### `reset_default_content_key` <a name="reset_default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDefaultContentKey"></a>

```python
def reset_default_content_key() -> None
```

##### `reset_drm_fairplay` <a name="reset_drm_fairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDrmFairplay"></a>

```python
def reset_drm_fairplay() -> None
```

##### `reset_enabled_protocols` <a name="reset_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetEnabledProtocols"></a>

```python
def reset_enabled_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKey">default_content_key</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplay">drm_fairplay</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocols">enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKeyInput">default_content_key_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplayInput">drm_fairplay_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocolsInput">enabled_protocols_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_content_key`<sup>Required</sup> <a name="default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKey"></a>

```python
default_content_key: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference</a>

---

##### `drm_fairplay`<sup>Required</sup> <a name="drm_fairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplay"></a>

```python
drm_fairplay: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference</a>

---

##### `enabled_protocols`<sup>Required</sup> <a name="enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocols"></a>

```python
enabled_protocols: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference</a>

---

##### `default_content_key_input`<sup>Optional</sup> <a name="default_content_key_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKeyInput"></a>

```python
default_content_key_input: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---

##### `drm_fairplay_input`<sup>Optional</sup> <a name="drm_fairplay_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplayInput"></a>

```python
drm_fairplay_input: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---

##### `enabled_protocols_input`<sup>Optional</sup> <a name="enabled_protocols_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocolsInput"></a>

```python
enabled_protocols_input: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCbcs
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---


### MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetPolicyName">reset_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_policy_name` <a name="reset_policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetPolicyName"></a>

```python
def reset_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---


### MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomLicenseAcquisitionUrlTemplate">reset_custom_license_acquisition_url_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_custom_license_acquisition_url_template` <a name="reset_custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomLicenseAcquisitionUrlTemplate"></a>

```python
def reset_custom_license_acquisition_url_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplateInput">custom_license_acquisition_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributes">custom_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplate">custom_license_acquisition_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: str
```

- *Type:* str

---

##### `custom_license_acquisition_url_template_input`<sup>Optional</sup> <a name="custom_license_acquisition_url_template_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplateInput"></a>

```python
custom_license_acquisition_url_template_input: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributes"></a>

```python
custom_attributes: str
```

- *Type:* str

---

##### `custom_license_acquisition_url_template`<sup>Required</sup> <a name="custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplate"></a>

```python
custom_license_acquisition_url_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCencDrmPlayready
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---


### MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDash">reset_dash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDownload">reset_download</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetHls">reset_hls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetSmoothStreaming">reset_smooth_streaming</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dash` <a name="reset_dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDash"></a>

```python
def reset_dash() -> None
```

##### `reset_download` <a name="reset_download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDownload"></a>

```python
def reset_download() -> None
```

##### `reset_hls` <a name="reset_hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetHls"></a>

```python
def reset_hls() -> None
```

##### `reset_smooth_streaming` <a name="reset_smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```python
def reset_smooth_streaming() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dashInput">dash_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.downloadInput">download_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hlsInput">hls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreamingInput">smooth_streaming_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.download">download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash_input`<sup>Optional</sup> <a name="dash_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dashInput"></a>

```python
dash_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `download_input`<sup>Optional</sup> <a name="download_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.downloadInput"></a>

```python
download_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hls_input`<sup>Optional</sup> <a name="hls_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hlsInput"></a>

```python
hls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smooth_streaming_input`<sup>Optional</sup> <a name="smooth_streaming_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```python
smooth_streaming_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dash"></a>

```python
dash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.download"></a>

```python
download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hls"></a>

```python
hls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smooth_streaming`<sup>Required</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---


### MediaStreamingPolicyCommonEncryptionCencOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey">put_default_content_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready">put_drm_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols">put_enabled_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDefaultContentKey">reset_default_content_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmPlayready">reset_drm_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmWidevineCustomLicenseAcquisitionUrlTemplate">reset_drm_widevine_custom_license_acquisition_url_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetEnabledProtocols">reset_enabled_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_content_key` <a name="put_default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey"></a>

```python
def put_default_content_key(
  label: str = None,
  policy_name: str = None
) -> None
```

###### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#label MediaStreamingPolicy#label}.

---

###### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey.parameter.policyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

##### `put_drm_playready` <a name="put_drm_playready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready"></a>

```python
def put_drm_playready(
  custom_attributes: str = None,
  custom_license_acquisition_url_template: str = None
) -> None
```

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready.parameter.customAttributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}.

---

###### `custom_license_acquisition_url_template`<sup>Optional</sup> <a name="custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready.parameter.customLicenseAcquisitionUrlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

##### `put_enabled_protocols` <a name="put_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols"></a>

```python
def put_enabled_protocols(
  dash: typing.Union[bool, IResolvable] = None,
  download: typing.Union[bool, IResolvable] = None,
  hls: typing.Union[bool, IResolvable] = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None
) -> None
```

###### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols.parameter.dash"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

###### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols.parameter.download"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#download MediaStreamingPolicy#download}.

---

###### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols.parameter.hls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

###### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols.parameter.smoothStreaming"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

##### `reset_default_content_key` <a name="reset_default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDefaultContentKey"></a>

```python
def reset_default_content_key() -> None
```

##### `reset_drm_playready` <a name="reset_drm_playready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmPlayready"></a>

```python
def reset_drm_playready() -> None
```

##### `reset_drm_widevine_custom_license_acquisition_url_template` <a name="reset_drm_widevine_custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```python
def reset_drm_widevine_custom_license_acquisition_url_template() -> None
```

##### `reset_enabled_protocols` <a name="reset_enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetEnabledProtocols"></a>

```python
def reset_enabled_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKey">default_content_key</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayready">drm_playready</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference">MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocols">enabled_protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKeyInput">default_content_key_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayreadyInput">drm_playready_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplateInput">drm_widevine_custom_license_acquisition_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocolsInput">enabled_protocols_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplate">drm_widevine_custom_license_acquisition_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_content_key`<sup>Required</sup> <a name="default_content_key" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKey"></a>

```python
default_content_key: MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference</a>

---

##### `drm_playready`<sup>Required</sup> <a name="drm_playready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayready"></a>

```python
drm_playready: MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference">MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference</a>

---

##### `enabled_protocols`<sup>Required</sup> <a name="enabled_protocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocols"></a>

```python
enabled_protocols: MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference</a>

---

##### `default_content_key_input`<sup>Optional</sup> <a name="default_content_key_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKeyInput"></a>

```python
default_content_key_input: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---

##### `drm_playready_input`<sup>Optional</sup> <a name="drm_playready_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayreadyInput"></a>

```python
drm_playready_input: MediaStreamingPolicyCommonEncryptionCencDrmPlayready
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---

##### `drm_widevine_custom_license_acquisition_url_template_input`<sup>Optional</sup> <a name="drm_widevine_custom_license_acquisition_url_template_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplateInput"></a>

```python
drm_widevine_custom_license_acquisition_url_template_input: str
```

- *Type:* str

---

##### `enabled_protocols_input`<sup>Optional</sup> <a name="enabled_protocols_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocolsInput"></a>

```python
enabled_protocols_input: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---

##### `drm_widevine_custom_license_acquisition_url_template`<sup>Required</sup> <a name="drm_widevine_custom_license_acquisition_url_template" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```python
drm_widevine_custom_license_acquisition_url_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyCommonEncryptionCenc
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---


### MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference <a name="MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDash">reset_dash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDownload">reset_download</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetHls">reset_hls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming">reset_smooth_streaming</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dash` <a name="reset_dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDash"></a>

```python
def reset_dash() -> None
```

##### `reset_download` <a name="reset_download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDownload"></a>

```python
def reset_download() -> None
```

##### `reset_hls` <a name="reset_hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetHls"></a>

```python
def reset_hls() -> None
```

##### `reset_smooth_streaming` <a name="reset_smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```python
def reset_smooth_streaming() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dashInput">dash_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.downloadInput">download_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hlsInput">hls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput">smooth_streaming_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.download">download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash_input`<sup>Optional</sup> <a name="dash_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dashInput"></a>

```python
dash_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `download_input`<sup>Optional</sup> <a name="download_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.downloadInput"></a>

```python
download_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hls_input`<sup>Optional</sup> <a name="hls_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hlsInput"></a>

```python
hls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smooth_streaming_input`<sup>Optional</sup> <a name="smooth_streaming_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```python
smooth_streaming_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dash"></a>

```python
dash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.download"></a>

```python
download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hls"></a>

```python
hls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `smooth_streaming`<sup>Required</sup> <a name="smooth_streaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingPolicyNoEncryptionEnabledProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---


### MediaStreamingPolicyTimeoutsOutputReference <a name="MediaStreamingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_policy

mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MediaStreamingPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>, cdktf.IResolvable]

---



