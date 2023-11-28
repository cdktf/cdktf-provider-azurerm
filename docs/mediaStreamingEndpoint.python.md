# `mediaStreamingEndpoint` Submodule <a name="`mediaStreamingEndpoint` Submodule" id="@cdktf/provider-azurerm.mediaStreamingEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingEndpoint <a name="MediaStreamingEndpoint" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint azurerm_media_streaming_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpoint(
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
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  scale_units: typing.Union[int, float],
  access_control: MediaStreamingEndpointAccessControl = None,
  auto_start_enabled: typing.Union[bool, IResolvable] = None,
  cdn_enabled: typing.Union[bool, IResolvable] = None,
  cdn_profile: str = None,
  cdn_provider: str = None,
  cross_site_access_policy: MediaStreamingEndpointCrossSiteAccessPolicy = None,
  custom_host_names: typing.List[str] = None,
  description: str = None,
  id: str = None,
  max_cache_age_seconds: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MediaStreamingEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scaleUnits">scale_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.accessControl">access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.autoStartEnabled">auto_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnEnabled">cdn_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProfile">cdn_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProvider">cdn_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.crossSiteAccessPolicy">cross_site_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.customHostNames">custom_host_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.maxCacheAgeSeconds">max_cache_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}.

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}.

---

##### `scale_units`<sup>Required</sup> <a name="scale_units" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scaleUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}.

---

##### `access_control`<sup>Optional</sup> <a name="access_control" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.accessControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}

---

##### `auto_start_enabled`<sup>Optional</sup> <a name="auto_start_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.autoStartEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}.

---

##### `cdn_enabled`<sup>Optional</sup> <a name="cdn_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}.

---

##### `cdn_profile`<sup>Optional</sup> <a name="cdn_profile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}.

---

##### `cdn_provider`<sup>Optional</sup> <a name="cdn_provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}.

---

##### `cross_site_access_policy`<sup>Optional</sup> <a name="cross_site_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.crossSiteAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}

---

##### `custom_host_names`<sup>Optional</sup> <a name="custom_host_names" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.customHostNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_cache_age_seconds`<sup>Optional</sup> <a name="max_cache_age_seconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.maxCacheAgeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl">put_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy">put_cross_site_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl">reset_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled">reset_auto_start_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled">reset_cdn_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile">reset_cdn_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider">reset_cdn_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy">reset_cross_site_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames">reset_custom_host_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds">reset_max_cache_age_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_access_control` <a name="put_access_control" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl"></a>

```python
def put_access_control(
  akamai_signature_header_authentication_key: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]] = None,
  ip_allow: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlIpAllow]] = None
) -> None
```

###### `akamai_signature_header_authentication_key`<sup>Optional</sup> <a name="akamai_signature_header_authentication_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl.parameter.akamaiSignatureHeaderAuthenticationKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]

akamai_signature_header_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}

---

###### `ip_allow`<sup>Optional</sup> <a name="ip_allow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl.parameter.ipAllow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]

ip_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#ip_allow MediaStreamingEndpoint#ip_allow}

---

##### `put_cross_site_access_policy` <a name="put_cross_site_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy"></a>

```python
def put_cross_site_access_policy(
  client_access_policy: str = None,
  cross_domain_policy: str = None
) -> None
```

###### `client_access_policy`<sup>Optional</sup> <a name="client_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy.parameter.clientAccessPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}.

---

###### `cross_domain_policy`<sup>Optional</sup> <a name="cross_domain_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy.parameter.crossDomainPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}.

---

##### `reset_access_control` <a name="reset_access_control" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl"></a>

```python
def reset_access_control() -> None
```

##### `reset_auto_start_enabled` <a name="reset_auto_start_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled"></a>

```python
def reset_auto_start_enabled() -> None
```

##### `reset_cdn_enabled` <a name="reset_cdn_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled"></a>

```python
def reset_cdn_enabled() -> None
```

##### `reset_cdn_profile` <a name="reset_cdn_profile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile"></a>

```python
def reset_cdn_profile() -> None
```

##### `reset_cdn_provider` <a name="reset_cdn_provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider"></a>

```python
def reset_cdn_provider() -> None
```

##### `reset_cross_site_access_policy` <a name="reset_cross_site_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy"></a>

```python
def reset_cross_site_access_policy() -> None
```

##### `reset_custom_host_names` <a name="reset_custom_host_names" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames"></a>

```python
def reset_custom_host_names() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_cache_age_seconds` <a name="reset_max_cache_age_seconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds"></a>

```python
def reset_max_cache_age_seconds() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaStreamingEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaStreamingEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaStreamingEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaStreamingEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaStreamingEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl">access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy">cross_site_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput">access_control_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput">auto_start_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput">cdn_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput">cdn_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput">cdn_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput">cross_site_access_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput">custom_host_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput">max_cache_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput">media_services_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput">scale_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled">auto_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled">cdn_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile">cdn_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider">cdn_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames">custom_host_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds">max_cache_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits">scale_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_control`<sup>Required</sup> <a name="access_control" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl"></a>

```python
access_control: MediaStreamingEndpointAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a>

---

##### `cross_site_access_policy`<sup>Required</sup> <a name="cross_site_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy"></a>

```python
cross_site_access_policy: MediaStreamingEndpointCrossSiteAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a>

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku"></a>

```python
sku: MediaStreamingEndpointSkuList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts"></a>

```python
timeouts: MediaStreamingEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a>

---

##### `access_control_input`<sup>Optional</sup> <a name="access_control_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput"></a>

```python
access_control_input: MediaStreamingEndpointAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `auto_start_enabled_input`<sup>Optional</sup> <a name="auto_start_enabled_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput"></a>

```python
auto_start_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdn_enabled_input`<sup>Optional</sup> <a name="cdn_enabled_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput"></a>

```python
cdn_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdn_profile_input`<sup>Optional</sup> <a name="cdn_profile_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput"></a>

```python
cdn_profile_input: str
```

- *Type:* str

---

##### `cdn_provider_input`<sup>Optional</sup> <a name="cdn_provider_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput"></a>

```python
cdn_provider_input: str
```

- *Type:* str

---

##### `cross_site_access_policy_input`<sup>Optional</sup> <a name="cross_site_access_policy_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput"></a>

```python
cross_site_access_policy_input: MediaStreamingEndpointCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `custom_host_names_input`<sup>Optional</sup> <a name="custom_host_names_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput"></a>

```python
custom_host_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_cache_age_seconds_input`<sup>Optional</sup> <a name="max_cache_age_seconds_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput"></a>

```python
max_cache_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_services_account_name_input`<sup>Optional</sup> <a name="media_services_account_name_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput"></a>

```python
media_services_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scale_units_input`<sup>Optional</sup> <a name="scale_units_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput"></a>

```python
scale_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaStreamingEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>]

---

##### `auto_start_enabled`<sup>Required</sup> <a name="auto_start_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled"></a>

```python
auto_start_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdn_enabled`<sup>Required</sup> <a name="cdn_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled"></a>

```python
cdn_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdn_profile`<sup>Required</sup> <a name="cdn_profile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile"></a>

```python
cdn_profile: str
```

- *Type:* str

---

##### `cdn_provider`<sup>Required</sup> <a name="cdn_provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider"></a>

```python
cdn_provider: str
```

- *Type:* str

---

##### `custom_host_names`<sup>Required</sup> <a name="custom_host_names" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames"></a>

```python
custom_host_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_cache_age_seconds`<sup>Required</sup> <a name="max_cache_age_seconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds"></a>

```python
max_cache_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scale_units`<sup>Required</sup> <a name="scale_units" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits"></a>

```python
scale_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingEndpointAccessControl <a name="MediaStreamingEndpointAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControl(
  akamai_signature_header_authentication_key: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]] = None,
  ip_allow: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlIpAllow]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey">akamai_signature_header_authentication_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]</code> | akamai_signature_header_authentication_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow">ip_allow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]</code> | ip_allow block. |

---

##### `akamai_signature_header_authentication_key`<sup>Optional</sup> <a name="akamai_signature_header_authentication_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey"></a>

```python
akamai_signature_header_authentication_key: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]

akamai_signature_header_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}

---

##### `ip_allow`<sup>Optional</sup> <a name="ip_allow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow"></a>

```python
ip_allow: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlIpAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]

ip_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#ip_allow MediaStreamingEndpoint#ip_allow}

---

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey(
  base64_key: str = None,
  expiration: str = None,
  identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key">base64_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration">expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}. |

---

##### `base64_key`<sup>Optional</sup> <a name="base64_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key"></a>

```python
base64_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}.

---

### MediaStreamingEndpointAccessControlIpAllow <a name="MediaStreamingEndpointAccessControlIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow(
  address: str = None,
  name: str = None,
  subnet_prefix_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength">subnet_prefix_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `subnet_prefix_length`<sup>Optional</sup> <a name="subnet_prefix_length" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength"></a>

```python
subnet_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}.

---

### MediaStreamingEndpointConfig <a name="MediaStreamingEndpointConfig" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  scale_units: typing.Union[int, float],
  access_control: MediaStreamingEndpointAccessControl = None,
  auto_start_enabled: typing.Union[bool, IResolvable] = None,
  cdn_enabled: typing.Union[bool, IResolvable] = None,
  cdn_profile: str = None,
  cdn_provider: str = None,
  cross_site_access_policy: MediaStreamingEndpointCrossSiteAccessPolicy = None,
  custom_host_names: typing.List[str] = None,
  description: str = None,
  id: str = None,
  max_cache_age_seconds: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MediaStreamingEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits">scale_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl">access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled">auto_start_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled">cdn_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile">cdn_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider">cdn_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy">cross_site_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames">custom_host_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds">max_cache_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}.

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}.

---

##### `scale_units`<sup>Required</sup> <a name="scale_units" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits"></a>

```python
scale_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}.

---

##### `access_control`<sup>Optional</sup> <a name="access_control" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl"></a>

```python
access_control: MediaStreamingEndpointAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}

---

##### `auto_start_enabled`<sup>Optional</sup> <a name="auto_start_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled"></a>

```python
auto_start_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}.

---

##### `cdn_enabled`<sup>Optional</sup> <a name="cdn_enabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled"></a>

```python
cdn_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}.

---

##### `cdn_profile`<sup>Optional</sup> <a name="cdn_profile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile"></a>

```python
cdn_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}.

---

##### `cdn_provider`<sup>Optional</sup> <a name="cdn_provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider"></a>

```python
cdn_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}.

---

##### `cross_site_access_policy`<sup>Optional</sup> <a name="cross_site_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy"></a>

```python
cross_site_access_policy: MediaStreamingEndpointCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}

---

##### `custom_host_names`<sup>Optional</sup> <a name="custom_host_names" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames"></a>

```python
custom_host_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_cache_age_seconds`<sup>Optional</sup> <a name="max_cache_age_seconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds"></a>

```python
max_cache_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts"></a>

```python
timeouts: MediaStreamingEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}

---

### MediaStreamingEndpointCrossSiteAccessPolicy <a name="MediaStreamingEndpointCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy(
  client_access_policy: str = None,
  cross_domain_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy">client_access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy">cross_domain_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}. |

---

##### `client_access_policy`<sup>Optional</sup> <a name="client_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```python
client_access_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}.

---

##### `cross_domain_policy`<sup>Optional</sup> <a name="cross_domain_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```python
cross_domain_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}.

---

### MediaStreamingEndpointSku <a name="MediaStreamingEndpointSku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointSku()
```


### MediaStreamingEndpointTimeouts <a name="MediaStreamingEndpointTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]

---


### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key">reset_base64_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base64_key` <a name="reset_base64_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key"></a>

```python
def reset_base64_key() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput">base64_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key">base64_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base64_key_input`<sup>Optional</sup> <a name="base64_key_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput"></a>

```python
base64_key_input: str
```

- *Type:* str

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `base64_key`<sup>Required</sup> <a name="base64_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key"></a>

```python
base64_key: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]

---


### MediaStreamingEndpointAccessControlIpAllowList <a name="MediaStreamingEndpointAccessControlIpAllowList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaStreamingEndpointAccessControlIpAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlIpAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]

---


### MediaStreamingEndpointAccessControlIpAllowOutputReference <a name="MediaStreamingEndpointAccessControlIpAllowOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength">reset_subnet_prefix_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_subnet_prefix_length` <a name="reset_subnet_prefix_length" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength"></a>

```python
def reset_subnet_prefix_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput">subnet_prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength">subnet_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subnet_prefix_length_input`<sup>Optional</sup> <a name="subnet_prefix_length_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput"></a>

```python
subnet_prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subnet_prefix_length`<sup>Required</sup> <a name="subnet_prefix_length" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength"></a>

```python
subnet_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaStreamingEndpointAccessControlIpAllow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]

---


### MediaStreamingEndpointAccessControlOutputReference <a name="MediaStreamingEndpointAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey">put_akamai_signature_header_authentication_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow">put_ip_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey">reset_akamai_signature_header_authentication_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow">reset_ip_allow</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_akamai_signature_header_authentication_key` <a name="put_akamai_signature_header_authentication_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey"></a>

```python
def put_akamai_signature_header_authentication_key(
  value: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]

---

##### `put_ip_allow` <a name="put_ip_allow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow"></a>

```python
def put_ip_allow(
  value: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlIpAllow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]

---

##### `reset_akamai_signature_header_authentication_key` <a name="reset_akamai_signature_header_authentication_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey"></a>

```python
def reset_akamai_signature_header_authentication_key() -> None
```

##### `reset_ip_allow` <a name="reset_ip_allow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow"></a>

```python
def reset_ip_allow() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey">akamai_signature_header_authentication_key</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow">ip_allow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput">akamai_signature_header_authentication_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput">ip_allow_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `akamai_signature_header_authentication_key`<sup>Required</sup> <a name="akamai_signature_header_authentication_key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey"></a>

```python
akamai_signature_header_authentication_key: MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a>

---

##### `ip_allow`<sup>Required</sup> <a name="ip_allow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow"></a>

```python
ip_allow: MediaStreamingEndpointAccessControlIpAllowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a>

---

##### `akamai_signature_header_authentication_key_input`<sup>Optional</sup> <a name="akamai_signature_header_authentication_key_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput"></a>

```python
akamai_signature_header_authentication_key_input: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>]]

---

##### `ip_allow_input`<sup>Optional</sup> <a name="ip_allow_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput"></a>

```python
ip_allow_input: typing.Union[IResolvable, typing.List[MediaStreamingEndpointAccessControlIpAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingEndpointAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---


### MediaStreamingEndpointCrossSiteAccessPolicyOutputReference <a name="MediaStreamingEndpointCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy">reset_client_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy">reset_cross_domain_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_access_policy` <a name="reset_client_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```python
def reset_client_access_policy() -> None
```

##### `reset_cross_domain_policy` <a name="reset_cross_domain_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```python
def reset_cross_domain_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">client_access_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">cross_domain_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">client_access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">cross_domain_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_access_policy_input`<sup>Optional</sup> <a name="client_access_policy_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```python
client_access_policy_input: str
```

- *Type:* str

---

##### `cross_domain_policy_input`<sup>Optional</sup> <a name="cross_domain_policy_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```python
cross_domain_policy_input: str
```

- *Type:* str

---

##### `client_access_policy`<sup>Required</sup> <a name="client_access_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```python
client_access_policy: str
```

- *Type:* str

---

##### `cross_domain_policy`<sup>Required</sup> <a name="cross_domain_policy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```python
cross_domain_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingEndpointCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---


### MediaStreamingEndpointSkuList <a name="MediaStreamingEndpointSkuList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointSkuList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaStreamingEndpointSkuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MediaStreamingEndpointSkuOutputReference <a name="MediaStreamingEndpointSkuOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue"></a>

```python
internal_value: MediaStreamingEndpointSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a>

---


### MediaStreamingEndpointTimeoutsOutputReference <a name="MediaStreamingEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_streaming_endpoint

mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaStreamingEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>]

---



