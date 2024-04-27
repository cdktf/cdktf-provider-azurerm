# `springCloudApp` Submodule <a name="`springCloudApp` Submodule" id="@cdktf/provider-azurerm.springCloudApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApp <a name="SpringCloudApp" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app azurerm_spring_cloud_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudApp(
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
  resource_group_name: str,
  service_name: str,
  addon_json: str = None,
  custom_persistent_disk: typing.Union[IResolvable, typing.List[SpringCloudAppCustomPersistentDisk]] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: SpringCloudAppIdentity = None,
  ingress_settings: SpringCloudAppIngressSettings = None,
  is_public: typing.Union[bool, IResolvable] = None,
  persistent_disk: SpringCloudAppPersistentDisk = None,
  public_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: SpringCloudAppTimeouts = None,
  tls_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.addonJson">addon_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.customPersistentDisk">custom_persistent_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]</code> | custom_persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.ingressSettings">ingress_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | ingress_settings block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.persistentDisk">persistent_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.publicEndpointEnabled">public_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}.

---

##### `addon_json`<sup>Optional</sup> <a name="addon_json" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.addonJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}.

---

##### `custom_persistent_disk`<sup>Optional</sup> <a name="custom_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.customPersistentDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]

custom_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#custom_persistent_disk SpringCloudApp#custom_persistent_disk}

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#identity SpringCloudApp#identity}

---

##### `ingress_settings`<sup>Optional</sup> <a name="ingress_settings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.ingressSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

ingress_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#ingress_settings SpringCloudApp#ingress_settings}

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}.

---

##### `persistent_disk`<sup>Optional</sup> <a name="persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.persistentDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#persistent_disk SpringCloudApp#persistent_disk}

---

##### `public_endpoint_enabled`<sup>Optional</sup> <a name="public_endpoint_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.publicEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#timeouts SpringCloudApp#timeouts}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.tlsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk">put_custom_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings">put_ingress_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk">put_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetAddonJson">reset_addon_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetCustomPersistentDisk">reset_custom_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIngressSettings">reset_ingress_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPersistentDisk">reset_persistent_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPublicEndpointEnabled">reset_public_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTlsEnabled">reset_tls_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_persistent_disk` <a name="put_custom_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk"></a>

```python
def put_custom_persistent_disk(
  value: typing.Union[IResolvable, typing.List[SpringCloudAppCustomPersistentDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}.

---

##### `put_ingress_settings` <a name="put_ingress_settings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings"></a>

```python
def put_ingress_settings(
  backend_protocol: str = None,
  read_timeout_in_seconds: typing.Union[int, float] = None,
  send_timeout_in_seconds: typing.Union[int, float] = None,
  session_affinity: str = None,
  session_cookie_max_age: typing.Union[int, float] = None
) -> None
```

###### `backend_protocol`<sup>Optional</sup> <a name="backend_protocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.backendProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}.

---

###### `read_timeout_in_seconds`<sup>Optional</sup> <a name="read_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.readTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}.

---

###### `send_timeout_in_seconds`<sup>Optional</sup> <a name="send_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.sendTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}.

---

###### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.sessionAffinity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}.

---

###### `session_cookie_max_age`<sup>Optional</sup> <a name="session_cookie_max_age" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.sessionCookieMaxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}.

---

##### `put_persistent_disk` <a name="put_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk"></a>

```python
def put_persistent_disk(
  size_in_gb: typing.Union[int, float],
  mount_path: str = None
) -> None
```

###### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk.parameter.sizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}.

---

###### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk.parameter.mountPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}.

---

##### `reset_addon_json` <a name="reset_addon_json" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetAddonJson"></a>

```python
def reset_addon_json() -> None
```

##### `reset_custom_persistent_disk` <a name="reset_custom_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetCustomPersistentDisk"></a>

```python
def reset_custom_persistent_disk() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_ingress_settings` <a name="reset_ingress_settings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIngressSettings"></a>

```python
def reset_ingress_settings() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_persistent_disk` <a name="reset_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPersistentDisk"></a>

```python
def reset_persistent_disk() -> None
```

##### `reset_public_endpoint_enabled` <a name="reset_public_endpoint_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPublicEndpointEnabled"></a>

```python
def reset_public_endpoint_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_enabled` <a name="reset_tls_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTlsEnabled"></a>

```python
def reset_tls_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudApp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDisk">custom_persistent_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList">SpringCloudAppCustomPersistentDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference">SpringCloudAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettings">ingress_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference">SpringCloudAppIngressSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDisk">persistent_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference">SpringCloudAppPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference">SpringCloudAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJsonInput">addon_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDiskInput">custom_persistent_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettingsInput">ingress_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDiskInput">persistent_disk_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabledInput">public_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabledInput">tls_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJson">addon_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabled">public_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_persistent_disk`<sup>Required</sup> <a name="custom_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDisk"></a>

```python
custom_persistent_disk: SpringCloudAppCustomPersistentDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList">SpringCloudAppCustomPersistentDiskList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identity"></a>

```python
identity: SpringCloudAppIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference">SpringCloudAppIdentityOutputReference</a>

---

##### `ingress_settings`<sup>Required</sup> <a name="ingress_settings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettings"></a>

```python
ingress_settings: SpringCloudAppIngressSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference">SpringCloudAppIngressSettingsOutputReference</a>

---

##### `persistent_disk`<sup>Required</sup> <a name="persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDisk"></a>

```python
persistent_disk: SpringCloudAppPersistentDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference">SpringCloudAppPersistentDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeouts"></a>

```python
timeouts: SpringCloudAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference">SpringCloudAppTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `addon_json_input`<sup>Optional</sup> <a name="addon_json_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJsonInput"></a>

```python
addon_json_input: str
```

- *Type:* str

---

##### `custom_persistent_disk_input`<sup>Optional</sup> <a name="custom_persistent_disk_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDiskInput"></a>

```python
custom_persistent_disk_input: typing.Union[IResolvable, typing.List[SpringCloudAppCustomPersistentDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identityInput"></a>

```python
identity_input: SpringCloudAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_settings_input`<sup>Optional</sup> <a name="ingress_settings_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettingsInput"></a>

```python
ingress_settings_input: SpringCloudAppIngressSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `persistent_disk_input`<sup>Optional</sup> <a name="persistent_disk_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDiskInput"></a>

```python
persistent_disk_input: SpringCloudAppPersistentDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---

##### `public_endpoint_enabled_input`<sup>Optional</sup> <a name="public_endpoint_enabled_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabledInput"></a>

```python
public_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>]

---

##### `tls_enabled_input`<sup>Optional</sup> <a name="tls_enabled_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabledInput"></a>

```python
tls_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `addon_json`<sup>Required</sup> <a name="addon_json" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJson"></a>

```python
addon_json: str
```

- *Type:* str

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_endpoint_enabled`<sup>Required</sup> <a name="public_endpoint_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabled"></a>

```python
public_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `tls_enabled`<sup>Required</sup> <a name="tls_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppConfig <a name="SpringCloudAppConfig" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  service_name: str,
  addon_json: str = None,
  custom_persistent_disk: typing.Union[IResolvable, typing.List[SpringCloudAppCustomPersistentDisk]] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: SpringCloudAppIdentity = None,
  ingress_settings: SpringCloudAppIngressSettings = None,
  is_public: typing.Union[bool, IResolvable] = None,
  persistent_disk: SpringCloudAppPersistentDisk = None,
  public_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: SpringCloudAppTimeouts = None,
  tls_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.addonJson">addon_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.customPersistentDisk">custom_persistent_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]</code> | custom_persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.ingressSettings">ingress_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | ingress_settings block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.persistentDisk">persistent_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.publicEndpointEnabled">public_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}.

---

##### `addon_json`<sup>Optional</sup> <a name="addon_json" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.addonJson"></a>

```python
addon_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}.

---

##### `custom_persistent_disk`<sup>Optional</sup> <a name="custom_persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.customPersistentDisk"></a>

```python
custom_persistent_disk: typing.Union[IResolvable, typing.List[SpringCloudAppCustomPersistentDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]

custom_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#custom_persistent_disk SpringCloudApp#custom_persistent_disk}

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.identity"></a>

```python
identity: SpringCloudAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#identity SpringCloudApp#identity}

---

##### `ingress_settings`<sup>Optional</sup> <a name="ingress_settings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.ingressSettings"></a>

```python
ingress_settings: SpringCloudAppIngressSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

ingress_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#ingress_settings SpringCloudApp#ingress_settings}

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}.

---

##### `persistent_disk`<sup>Optional</sup> <a name="persistent_disk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.persistentDisk"></a>

```python
persistent_disk: SpringCloudAppPersistentDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#persistent_disk SpringCloudApp#persistent_disk}

---

##### `public_endpoint_enabled`<sup>Optional</sup> <a name="public_endpoint_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.publicEndpointEnabled"></a>

```python
public_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.timeouts"></a>

```python
timeouts: SpringCloudAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#timeouts SpringCloudApp#timeouts}

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}.

---

### SpringCloudAppCustomPersistentDisk <a name="SpringCloudAppCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppCustomPersistentDisk(
  mount_path: str,
  share_name: str,
  storage_name: str,
  mount_options: typing.List[str] = None,
  read_only_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#share_name SpringCloudApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.storageName">storage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#storage_name SpringCloudApp#storage_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_options SpringCloudApp#mount_options}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.readOnlyEnabled">read_only_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read_only_enabled SpringCloudApp#read_only_enabled}. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#share_name SpringCloudApp#share_name}.

---

##### `storage_name`<sup>Required</sup> <a name="storage_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.storageName"></a>

```python
storage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#storage_name SpringCloudApp#storage_name}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_options SpringCloudApp#mount_options}.

---

##### `read_only_enabled`<sup>Optional</sup> <a name="read_only_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.readOnlyEnabled"></a>

```python
read_only_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read_only_enabled SpringCloudApp#read_only_enabled}.

---

### SpringCloudAppIdentity <a name="SpringCloudAppIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}.

---

### SpringCloudAppIngressSettings <a name="SpringCloudAppIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppIngressSettings(
  backend_protocol: str = None,
  read_timeout_in_seconds: typing.Union[int, float] = None,
  send_timeout_in_seconds: typing.Union[int, float] = None,
  session_affinity: str = None,
  session_cookie_max_age: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.backendProtocol">backend_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.readTimeoutInSeconds">read_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sendTimeoutInSeconds">send_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionCookieMaxAge">session_cookie_max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}. |

---

##### `backend_protocol`<sup>Optional</sup> <a name="backend_protocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.backendProtocol"></a>

```python
backend_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}.

---

##### `read_timeout_in_seconds`<sup>Optional</sup> <a name="read_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.readTimeoutInSeconds"></a>

```python
read_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}.

---

##### `send_timeout_in_seconds`<sup>Optional</sup> <a name="send_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sendTimeoutInSeconds"></a>

```python
send_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}.

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}.

---

##### `session_cookie_max_age`<sup>Optional</sup> <a name="session_cookie_max_age" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionCookieMaxAge"></a>

```python
session_cookie_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}.

---

### SpringCloudAppPersistentDisk <a name="SpringCloudAppPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppPersistentDisk(
  size_in_gb: typing.Union[int, float],
  mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}. |

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}.

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

### SpringCloudAppTimeouts <a name="SpringCloudAppTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppCustomPersistentDiskList <a name="SpringCloudAppCustomPersistentDiskList" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppCustomPersistentDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpringCloudAppCustomPersistentDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpringCloudAppCustomPersistentDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]]

---


### SpringCloudAppCustomPersistentDiskOutputReference <a name="SpringCloudAppCustomPersistentDiskOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetReadOnlyEnabled">reset_read_only_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_read_only_enabled` <a name="reset_read_only_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetReadOnlyEnabled"></a>

```python
def reset_read_only_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabledInput">read_only_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageNameInput">storage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabled">read_only_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageName">storage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `read_only_enabled_input`<sup>Optional</sup> <a name="read_only_enabled_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabledInput"></a>

```python
read_only_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_name_input`<sup>Optional</sup> <a name="storage_name_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageNameInput"></a>

```python
storage_name_input: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `read_only_enabled`<sup>Required</sup> <a name="read_only_enabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabled"></a>

```python
read_only_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_name`<sup>Required</sup> <a name="storage_name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageName"></a>

```python
storage_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudAppCustomPersistentDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>]

---


### SpringCloudAppIdentityOutputReference <a name="SpringCloudAppIdentityOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---


### SpringCloudAppIngressSettingsOutputReference <a name="SpringCloudAppIngressSettingsOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppIngressSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetBackendProtocol">reset_backend_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetReadTimeoutInSeconds">reset_read_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSendTimeoutInSeconds">reset_send_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionCookieMaxAge">reset_session_cookie_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_protocol` <a name="reset_backend_protocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetBackendProtocol"></a>

```python
def reset_backend_protocol() -> None
```

##### `reset_read_timeout_in_seconds` <a name="reset_read_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetReadTimeoutInSeconds"></a>

```python
def reset_read_timeout_in_seconds() -> None
```

##### `reset_send_timeout_in_seconds` <a name="reset_send_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSendTimeoutInSeconds"></a>

```python
def reset_send_timeout_in_seconds() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_session_cookie_max_age` <a name="reset_session_cookie_max_age" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionCookieMaxAge"></a>

```python
def reset_session_cookie_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocolInput">backend_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSecondsInput">read_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSecondsInput">send_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAgeInput">session_cookie_max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocol">backend_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSeconds">read_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSeconds">send_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAge">session_cookie_max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_protocol_input`<sup>Optional</sup> <a name="backend_protocol_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocolInput"></a>

```python
backend_protocol_input: str
```

- *Type:* str

---

##### `read_timeout_in_seconds_input`<sup>Optional</sup> <a name="read_timeout_in_seconds_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSecondsInput"></a>

```python
read_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout_in_seconds_input`<sup>Optional</sup> <a name="send_timeout_in_seconds_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSecondsInput"></a>

```python
send_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `session_cookie_max_age_input`<sup>Optional</sup> <a name="session_cookie_max_age_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAgeInput"></a>

```python
session_cookie_max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_protocol`<sup>Required</sup> <a name="backend_protocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocol"></a>

```python
backend_protocol: str
```

- *Type:* str

---

##### `read_timeout_in_seconds`<sup>Required</sup> <a name="read_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSeconds"></a>

```python
read_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout_in_seconds`<sup>Required</sup> <a name="send_timeout_in_seconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSeconds"></a>

```python
send_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `session_cookie_max_age`<sup>Required</sup> <a name="session_cookie_max_age" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAge"></a>

```python
session_cookie_max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudAppIngressSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---


### SpringCloudAppPersistentDiskOutputReference <a name="SpringCloudAppPersistentDiskOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppPersistentDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGbInput">size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `size_in_gb_input`<sup>Optional</sup> <a name="size_in_gb_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGbInput"></a>

```python
size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudAppPersistentDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---


### SpringCloudAppTimeoutsOutputReference <a name="SpringCloudAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app

springCloudApp.SpringCloudAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>]

---



