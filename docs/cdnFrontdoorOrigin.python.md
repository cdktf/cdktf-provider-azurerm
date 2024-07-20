# `cdnFrontdoorOrigin` Submodule <a name="`cdnFrontdoorOrigin` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOrigin <a name="CdnFrontdoorOrigin" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin azurerm_cdn_frontdoor_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOrigin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_origin_group_id: str,
  certificate_name_check_enabled: typing.Union[bool, IResolvable],
  host_name: str,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  health_probes_enabled: typing.Union[bool, IResolvable] = None,
  http_port: typing.Union[int, float] = None,
  https_port: typing.Union[int, float] = None,
  id: str = None,
  origin_host_header: str = None,
  priority: typing.Union[int, float] = None,
  private_link: CdnFrontdoorOriginPrivateLink = None,
  timeouts: CdnFrontdoorOriginTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.cdnFrontdoorOriginGroupId">cdn_frontdoor_origin_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.certificateNameCheckEnabled">certificate_name_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.healthProbesEnabled">health_probes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.originHostHeader">origin_host_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.privateLink">private_link</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_origin_group_id`<sup>Required</sup> <a name="cdn_frontdoor_origin_group_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.cdnFrontdoorOriginGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}.

---

##### `certificate_name_check_enabled`<sup>Required</sup> <a name="certificate_name_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.certificateNameCheckEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}.

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}.

---

##### `health_probes_enabled`<sup>Optional</sup> <a name="health_probes_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.healthProbesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}.

---

##### `http_port`<sup>Optional</sup> <a name="http_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}.

---

##### `https_port`<sup>Optional</sup> <a name="https_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpsPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `origin_host_header`<sup>Optional</sup> <a name="origin_host_header" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.originHostHeader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}.

---

##### `private_link`<sup>Optional</sup> <a name="private_link" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.privateLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#private_link CdnFrontdoorOrigin#private_link}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#timeouts CdnFrontdoorOrigin#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink">put_private_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHealthProbesEnabled">reset_health_probes_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpPort">reset_http_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpsPort">reset_https_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOriginHostHeader">reset_origin_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPrivateLink">reset_private_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_private_link` <a name="put_private_link" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink"></a>

```python
def put_private_link(
  location: str,
  private_link_target_id: str,
  request_message: str = None,
  target_type: str = None
) -> None
```

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}.

---

###### `private_link_target_id`<sup>Required</sup> <a name="private_link_target_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink.parameter.privateLinkTargetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}.

---

###### `request_message`<sup>Optional</sup> <a name="request_message" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink.parameter.requestMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}.

---

###### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_health_probes_enabled` <a name="reset_health_probes_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHealthProbesEnabled"></a>

```python
def reset_health_probes_enabled() -> None
```

##### `reset_http_port` <a name="reset_http_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpPort"></a>

```python
def reset_http_port() -> None
```

##### `reset_https_port` <a name="reset_https_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpsPort"></a>

```python
def reset_https_port() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_origin_host_header` <a name="reset_origin_host_header" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOriginHostHeader"></a>

```python
def reset_origin_host_header() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_private_link` <a name="reset_private_link" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPrivateLink"></a>

```python
def reset_private_link() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CdnFrontdoorOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOrigin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOrigin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOrigin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOrigin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CdnFrontdoorOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CdnFrontdoorOrigin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CdnFrontdoorOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLink">private_link</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference">CdnFrontdoorOriginPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference">CdnFrontdoorOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupIdInput">cdn_frontdoor_origin_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabledInput">certificate_name_check_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabledInput">health_probes_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPortInput">http_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPortInput">https_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeaderInput">origin_host_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLinkInput">private_link_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupId">cdn_frontdoor_origin_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabled">certificate_name_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabled">health_probes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeader">origin_host_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_link`<sup>Required</sup> <a name="private_link" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLink"></a>

```python
private_link: CdnFrontdoorOriginPrivateLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference">CdnFrontdoorOriginPrivateLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeouts"></a>

```python
timeouts: CdnFrontdoorOriginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference">CdnFrontdoorOriginTimeoutsOutputReference</a>

---

##### `cdn_frontdoor_origin_group_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_origin_group_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupIdInput"></a>

```python
cdn_frontdoor_origin_group_id_input: str
```

- *Type:* str

---

##### `certificate_name_check_enabled_input`<sup>Optional</sup> <a name="certificate_name_check_enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabledInput"></a>

```python
certificate_name_check_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_probes_enabled_input`<sup>Optional</sup> <a name="health_probes_enabled_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabledInput"></a>

```python
health_probes_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `http_port_input`<sup>Optional</sup> <a name="http_port_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPortInput"></a>

```python
http_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port_input`<sup>Optional</sup> <a name="https_port_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPortInput"></a>

```python
https_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `origin_host_header_input`<sup>Optional</sup> <a name="origin_host_header_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeaderInput"></a>

```python
origin_host_header_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_link_input`<sup>Optional</sup> <a name="private_link_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLinkInput"></a>

```python
private_link_input: CdnFrontdoorOriginPrivateLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CdnFrontdoorOriginTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdn_frontdoor_origin_group_id`<sup>Required</sup> <a name="cdn_frontdoor_origin_group_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupId"></a>

```python
cdn_frontdoor_origin_group_id: str
```

- *Type:* str

---

##### `certificate_name_check_enabled`<sup>Required</sup> <a name="certificate_name_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabled"></a>

```python
certificate_name_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_probes_enabled`<sup>Required</sup> <a name="health_probes_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabled"></a>

```python
health_probes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin_host_header`<sup>Required</sup> <a name="origin_host_header" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeader"></a>

```python
origin_host_header: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginConfig <a name="CdnFrontdoorOriginConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOriginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_origin_group_id: str,
  certificate_name_check_enabled: typing.Union[bool, IResolvable],
  host_name: str,
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  health_probes_enabled: typing.Union[bool, IResolvable] = None,
  http_port: typing.Union[int, float] = None,
  https_port: typing.Union[int, float] = None,
  id: str = None,
  origin_host_header: str = None,
  priority: typing.Union[int, float] = None,
  private_link: CdnFrontdoorOriginPrivateLink = None,
  timeouts: CdnFrontdoorOriginTimeouts = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.cdnFrontdoorOriginGroupId">cdn_frontdoor_origin_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.certificateNameCheckEnabled">certificate_name_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.healthProbesEnabled">health_probes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.originHostHeader">origin_host_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.privateLink">private_link</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_origin_group_id`<sup>Required</sup> <a name="cdn_frontdoor_origin_group_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.cdnFrontdoorOriginGroupId"></a>

```python
cdn_frontdoor_origin_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}.

---

##### `certificate_name_check_enabled`<sup>Required</sup> <a name="certificate_name_check_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.certificateNameCheckEnabled"></a>

```python
certificate_name_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}.

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}.

---

##### `health_probes_enabled`<sup>Optional</sup> <a name="health_probes_enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.healthProbesEnabled"></a>

```python
health_probes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}.

---

##### `http_port`<sup>Optional</sup> <a name="http_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}.

---

##### `https_port`<sup>Optional</sup> <a name="https_port" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `origin_host_header`<sup>Optional</sup> <a name="origin_host_header" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.originHostHeader"></a>

```python
origin_host_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}.

---

##### `private_link`<sup>Optional</sup> <a name="private_link" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.privateLink"></a>

```python
private_link: CdnFrontdoorOriginPrivateLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#private_link CdnFrontdoorOrigin#private_link}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.timeouts"></a>

```python
timeouts: CdnFrontdoorOriginTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#timeouts CdnFrontdoorOrigin#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}.

---

### CdnFrontdoorOriginPrivateLink <a name="CdnFrontdoorOriginPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink(
  location: str,
  private_link_target_id: str,
  request_message: str = None,
  target_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.privateLinkTargetId">private_link_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.requestMessage">request_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}.

---

##### `private_link_target_id`<sup>Required</sup> <a name="private_link_target_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.privateLinkTargetId"></a>

```python
private_link_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}.

---

##### `request_message`<sup>Optional</sup> <a name="request_message" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.requestMessage"></a>

```python
request_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}.

---

### CdnFrontdoorOriginTimeouts <a name="CdnFrontdoorOriginTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginPrivateLinkOutputReference <a name="CdnFrontdoorOriginPrivateLinkOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetRequestMessage">reset_request_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetTargetType">reset_target_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_request_message` <a name="reset_request_message" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetRequestMessage"></a>

```python
def reset_request_message() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetTargetType"></a>

```python
def reset_target_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetIdInput">private_link_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessageInput">request_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetId">private_link_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessage">request_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `private_link_target_id_input`<sup>Optional</sup> <a name="private_link_target_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetIdInput"></a>

```python
private_link_target_id_input: str
```

- *Type:* str

---

##### `request_message_input`<sup>Optional</sup> <a name="request_message_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessageInput"></a>

```python
request_message_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `private_link_target_id`<sup>Required</sup> <a name="private_link_target_id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetId"></a>

```python
private_link_target_id: str
```

- *Type:* str

---

##### `request_message`<sup>Required</sup> <a name="request_message" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessage"></a>

```python
request_message: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorOriginPrivateLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---


### CdnFrontdoorOriginTimeoutsOutputReference <a name="CdnFrontdoorOriginTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_origin

cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorOriginTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>]

---



