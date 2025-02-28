# `dashboardGrafanaManagedPrivateEndpoint` Submodule <a name="`dashboardGrafanaManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardGrafanaManagedPrivateEndpoint <a name="DashboardGrafanaManagedPrivateEndpoint" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint azurerm_dashboard_grafana_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grafana_id: str,
  location: str,
  name: str,
  private_link_resource_id: str,
  group_ids: typing.List[str] = None,
  id: str = None,
  private_link_resource_region: str = None,
  request_message: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DashboardGrafanaManagedPrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.grafanaId">grafana_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceId">private_link_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.groupIds">group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceRegion">private_link_resource_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.requestMessage">request_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grafana_id`<sup>Required</sup> <a name="grafana_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.grafanaId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}.

---

##### `private_link_resource_id`<sup>Required</sup> <a name="private_link_resource_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}.

---

##### `group_ids`<sup>Optional</sup> <a name="group_ids" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.groupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_link_resource_region`<sup>Optional</sup> <a name="private_link_resource_region" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}.

---

##### `request_message`<sup>Optional</sup> <a name="request_message" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.requestMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#timeouts DashboardGrafanaManagedPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetGroupIds">reset_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkResourceRegion">reset_private_link_resource_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetRequestMessage">reset_request_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}.

---

##### `reset_group_ids` <a name="reset_group_ids" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetGroupIds"></a>

```python
def reset_group_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_link_resource_region` <a name="reset_private_link_resource_region" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkResourceRegion"></a>

```python
def reset_private_link_resource_region() -> None
```

##### `reset_request_message` <a name="reset_request_message" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetRequestMessage"></a>

```python
def reset_request_message() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DashboardGrafanaManagedPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DashboardGrafanaManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DashboardGrafanaManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference">DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaIdInput">grafana_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIdsInput">group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceIdInput">private_link_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegionInput">private_link_resource_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessageInput">request_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaId">grafana_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIds">group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceId">private_link_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegion">private_link_resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessage">request_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeouts"></a>

```python
timeouts: DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference">DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `grafana_id_input`<sup>Optional</sup> <a name="grafana_id_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaIdInput"></a>

```python
grafana_id_input: str
```

- *Type:* str

---

##### `group_ids_input`<sup>Optional</sup> <a name="group_ids_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIdsInput"></a>

```python
group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_link_resource_id_input`<sup>Optional</sup> <a name="private_link_resource_id_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceIdInput"></a>

```python
private_link_resource_id_input: str
```

- *Type:* str

---

##### `private_link_resource_region_input`<sup>Optional</sup> <a name="private_link_resource_region_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegionInput"></a>

```python
private_link_resource_region_input: str
```

- *Type:* str

---

##### `request_message_input`<sup>Optional</sup> <a name="request_message_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessageInput"></a>

```python
request_message_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DashboardGrafanaManagedPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>]

---

##### `grafana_id`<sup>Required</sup> <a name="grafana_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaId"></a>

```python
grafana_id: str
```

- *Type:* str

---

##### `group_ids`<sup>Required</sup> <a name="group_ids" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIds"></a>

```python
group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_link_resource_id`<sup>Required</sup> <a name="private_link_resource_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceId"></a>

```python
private_link_resource_id: str
```

- *Type:* str

---

##### `private_link_resource_region`<sup>Required</sup> <a name="private_link_resource_region" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegion"></a>

```python
private_link_resource_region: str
```

- *Type:* str

---

##### `request_message`<sup>Required</sup> <a name="request_message" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessage"></a>

```python
request_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardGrafanaManagedPrivateEndpointConfig <a name="DashboardGrafanaManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grafana_id: str,
  location: str,
  name: str,
  private_link_resource_id: str,
  group_ids: typing.List[str] = None,
  id: str = None,
  private_link_resource_region: str = None,
  request_message: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DashboardGrafanaManagedPrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.grafanaId">grafana_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceId">private_link_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.groupIds">group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceRegion">private_link_resource_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.requestMessage">request_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grafana_id`<sup>Required</sup> <a name="grafana_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.grafanaId"></a>

```python
grafana_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}.

---

##### `private_link_resource_id`<sup>Required</sup> <a name="private_link_resource_id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceId"></a>

```python
private_link_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}.

---

##### `group_ids`<sup>Optional</sup> <a name="group_ids" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.groupIds"></a>

```python
group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_link_resource_region`<sup>Optional</sup> <a name="private_link_resource_region" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceRegion"></a>

```python
private_link_resource_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}.

---

##### `request_message`<sup>Optional</sup> <a name="request_message" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.requestMessage"></a>

```python
request_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: DashboardGrafanaManagedPrivateEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#timeouts DashboardGrafanaManagedPrivateEndpoint#timeouts}

---

### DashboardGrafanaManagedPrivateEndpointTimeouts <a name="DashboardGrafanaManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference <a name="DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana_managed_private_endpoint

dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DashboardGrafanaManagedPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>]

---



