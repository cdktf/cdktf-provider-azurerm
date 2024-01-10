# `springCloudApiPortal` Submodule <a name="`springCloudApiPortal` Submodule" id="@cdktf/provider-azurerm.springCloudApiPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApiPortal <a name="SpringCloudApiPortal" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal azurerm_spring_cloud_api_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortal(
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
  spring_cloud_service_id: str,
  gateway_ids: typing.List[str] = None,
  https_only_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  sso: SpringCloudApiPortalSso = None,
  timeouts: SpringCloudApiPortalTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#name SpringCloudApiPortal#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#spring_cloud_service_id SpringCloudApiPortal#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.gatewayIds">gateway_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#gateway_ids SpringCloudApiPortal#gateway_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.httpsOnlyEnabled">https_only_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#https_only_enabled SpringCloudApiPortal#https_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#id SpringCloudApiPortal#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#instance_count SpringCloudApiPortal#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#public_network_access_enabled SpringCloudApiPortal#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#name SpringCloudApiPortal#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.springCloudServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#spring_cloud_service_id SpringCloudApiPortal#spring_cloud_service_id}.

---

##### `gateway_ids`<sup>Optional</sup> <a name="gateway_ids" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.gatewayIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#gateway_ids SpringCloudApiPortal#gateway_ids}.

---

##### `https_only_enabled`<sup>Optional</sup> <a name="https_only_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.httpsOnlyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#https_only_enabled SpringCloudApiPortal#https_only_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#id SpringCloudApiPortal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#instance_count SpringCloudApiPortal#instance_count}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#public_network_access_enabled SpringCloudApiPortal#public_network_access_enabled}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.sso"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#sso SpringCloudApiPortal#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#timeouts SpringCloudApiPortal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso">put_sso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetGatewayIds">reset_gateway_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetHttpsOnlyEnabled">reset_https_only_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetSso">reset_sso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sso` <a name="put_sso" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso"></a>

```python
def put_sso(
  client_id: str = None,
  client_secret: str = None,
  issuer_uri: str = None,
  scope: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#client_id SpringCloudApiPortal#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#client_secret SpringCloudApiPortal#client_secret}.

---

###### `issuer_uri`<sup>Optional</sup> <a name="issuer_uri" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso.parameter.issuerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#issuer_uri SpringCloudApiPortal#issuer_uri}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso.parameter.scope"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#scope SpringCloudApiPortal#scope}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#create SpringCloudApiPortal#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#delete SpringCloudApiPortal#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#read SpringCloudApiPortal#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#update SpringCloudApiPortal#update}.

---

##### `reset_gateway_ids` <a name="reset_gateway_ids" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetGatewayIds"></a>

```python
def reset_gateway_ids() -> None
```

##### `reset_https_only_enabled` <a name="reset_https_only_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetHttpsOnlyEnabled"></a>

```python
def reset_https_only_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_sso` <a name="reset_sso" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetSso"></a>

```python
def reset_sso() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudApiPortal resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudApiPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudApiPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudApiPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudApiPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference">SpringCloudApiPortalSsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference">SpringCloudApiPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIdsInput">gateway_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabledInput">https_only_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceIdInput">spring_cloud_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.ssoInput">sso_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIds">gateway_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabled">https_only_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sso`<sup>Required</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.sso"></a>

```python
sso: SpringCloudApiPortalSsoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference">SpringCloudApiPortalSsoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeouts"></a>

```python
timeouts: SpringCloudApiPortalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference">SpringCloudApiPortalTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `gateway_ids_input`<sup>Optional</sup> <a name="gateway_ids_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIdsInput"></a>

```python
gateway_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `https_only_enabled_input`<sup>Optional</sup> <a name="https_only_enabled_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabledInput"></a>

```python
https_only_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spring_cloud_service_id_input`<sup>Optional</sup> <a name="spring_cloud_service_id_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceIdInput"></a>

```python
spring_cloud_service_id_input: str
```

- *Type:* str

---

##### `sso_input`<sup>Optional</sup> <a name="sso_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.ssoInput"></a>

```python
sso_input: SpringCloudApiPortalSso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudApiPortalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>]

---

##### `gateway_ids`<sup>Required</sup> <a name="gateway_ids" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIds"></a>

```python
gateway_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `https_only_enabled`<sup>Required</sup> <a name="https_only_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabled"></a>

```python
https_only_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApiPortalConfig <a name="SpringCloudApiPortalConfig" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  spring_cloud_service_id: str,
  gateway_ids: typing.List[str] = None,
  https_only_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  sso: SpringCloudApiPortalSso = None,
  timeouts: SpringCloudApiPortalTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#name SpringCloudApiPortal#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#spring_cloud_service_id SpringCloudApiPortal#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.gatewayIds">gateway_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#gateway_ids SpringCloudApiPortal#gateway_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.httpsOnlyEnabled">https_only_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#https_only_enabled SpringCloudApiPortal#https_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#id SpringCloudApiPortal#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#instance_count SpringCloudApiPortal#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#public_network_access_enabled SpringCloudApiPortal#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#name SpringCloudApiPortal#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#spring_cloud_service_id SpringCloudApiPortal#spring_cloud_service_id}.

---

##### `gateway_ids`<sup>Optional</sup> <a name="gateway_ids" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.gatewayIds"></a>

```python
gateway_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#gateway_ids SpringCloudApiPortal#gateway_ids}.

---

##### `https_only_enabled`<sup>Optional</sup> <a name="https_only_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.httpsOnlyEnabled"></a>

```python
https_only_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#https_only_enabled SpringCloudApiPortal#https_only_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#id SpringCloudApiPortal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#instance_count SpringCloudApiPortal#instance_count}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#public_network_access_enabled SpringCloudApiPortal#public_network_access_enabled}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.sso"></a>

```python
sso: SpringCloudApiPortalSso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#sso SpringCloudApiPortal#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.timeouts"></a>

```python
timeouts: SpringCloudApiPortalTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#timeouts SpringCloudApiPortal#timeouts}

---

### SpringCloudApiPortalSso <a name="SpringCloudApiPortalSso" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortalSso(
  client_id: str = None,
  client_secret: str = None,
  issuer_uri: str = None,
  scope: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#client_id SpringCloudApiPortal#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#client_secret SpringCloudApiPortal#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.issuerUri">issuer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#issuer_uri SpringCloudApiPortal#issuer_uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.scope">scope</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#scope SpringCloudApiPortal#scope}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#client_id SpringCloudApiPortal#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#client_secret SpringCloudApiPortal#client_secret}.

---

##### `issuer_uri`<sup>Optional</sup> <a name="issuer_uri" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#issuer_uri SpringCloudApiPortal#issuer_uri}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#scope SpringCloudApiPortal#scope}.

---

### SpringCloudApiPortalTimeouts <a name="SpringCloudApiPortalTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortalTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#create SpringCloudApiPortal#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#delete SpringCloudApiPortal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#read SpringCloudApiPortal#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#update SpringCloudApiPortal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#create SpringCloudApiPortal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#delete SpringCloudApiPortal#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#read SpringCloudApiPortal#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/spring_cloud_api_portal#update SpringCloudApiPortal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApiPortalSsoOutputReference <a name="SpringCloudApiPortalSsoOutputReference" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortalSsoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetIssuerUri">reset_issuer_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_issuer_uri` <a name="reset_issuer_uri" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetIssuerUri"></a>

```python
def reset_issuer_uri() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scopeInput">scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scopeInput"></a>

```python
scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudApiPortalSso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

---


### SpringCloudApiPortalTimeoutsOutputReference <a name="SpringCloudApiPortalTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_api_portal

springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudApiPortalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>]

---



