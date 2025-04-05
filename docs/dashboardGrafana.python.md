# `dashboardGrafana` Submodule <a name="`dashboardGrafana` Submodule" id="@cdktf/provider-azurerm.dashboardGrafana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardGrafana <a name="DashboardGrafana" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana azurerm_dashboard_grafana}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafana(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grafana_major_version: str,
  location: str,
  name: str,
  resource_group_name: str,
  api_key_enabled: typing.Union[bool, IResolvable] = None,
  auto_generated_domain_name_label_scope: str = None,
  azure_monitor_workspace_integrations: typing.Union[IResolvable, typing.List[DashboardGrafanaAzureMonitorWorkspaceIntegrations]] = None,
  deterministic_outbound_ip_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: DashboardGrafanaIdentity = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  sku: str = None,
  smtp: DashboardGrafanaSmtp = None,
  tags: typing.Mapping[str] = None,
  timeouts: DashboardGrafanaTimeouts = None,
  zone_redundancy_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.grafanaMajorVersion">grafana_major_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#grafana_major_version DashboardGrafana#grafana_major_version}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.apiKeyEnabled">api_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.azureMonitorWorkspaceIntegrations">azure_monitor_workspace_integrations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]</code> | azure_monitor_workspace_integrations block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.deterministicOutboundIpEnabled">deterministic_outbound_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.smtp">smtp</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | smtp block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grafana_major_version`<sup>Required</sup> <a name="grafana_major_version" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.grafanaMajorVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#grafana_major_version DashboardGrafana#grafana_major_version}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}.

---

##### `api_key_enabled`<sup>Optional</sup> <a name="api_key_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.apiKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}.

---

##### `auto_generated_domain_name_label_scope`<sup>Optional</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.autoGeneratedDomainNameLabelScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}.

---

##### `azure_monitor_workspace_integrations`<sup>Optional</sup> <a name="azure_monitor_workspace_integrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.azureMonitorWorkspaceIntegrations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]

azure_monitor_workspace_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#azure_monitor_workspace_integrations DashboardGrafana#azure_monitor_workspace_integrations}

---

##### `deterministic_outbound_ip_enabled`<sup>Optional</sup> <a name="deterministic_outbound_ip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.deterministicOutboundIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#identity DashboardGrafana#identity}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}.

---

##### `smtp`<sup>Optional</sup> <a name="smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.smtp"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

smtp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#smtp DashboardGrafana#smtp}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#timeouts DashboardGrafana#timeouts}

---

##### `zone_redundancy_enabled`<sup>Optional</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.zoneRedundancyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations">put_azure_monitor_workspace_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp">put_smtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetApiKeyEnabled">reset_api_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAutoGeneratedDomainNameLabelScope">reset_auto_generated_domain_name_label_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAzureMonitorWorkspaceIntegrations">reset_azure_monitor_workspace_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetDeterministicOutboundIpEnabled">reset_deterministic_outbound_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSmtp">reset_smtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetZoneRedundancyEnabled">reset_zone_redundancy_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_monitor_workspace_integrations` <a name="put_azure_monitor_workspace_integrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations"></a>

```python
def put_azure_monitor_workspace_integrations(
  value: typing.Union[IResolvable, typing.List[DashboardGrafanaAzureMonitorWorkspaceIntegrations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}.

---

##### `put_smtp` <a name="put_smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp"></a>

```python
def put_smtp(
  from_address: str,
  host: str,
  password: str,
  start_tls_policy: str,
  user: str,
  enabled: typing.Union[bool, IResolvable] = None,
  from_name: str = None,
  verification_skip_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.fromAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#from_address DashboardGrafana#from_address}.

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#host DashboardGrafana#host}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#password DashboardGrafana#password}.

---

###### `start_tls_policy`<sup>Required</sup> <a name="start_tls_policy" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.startTlsPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#start_tls_policy DashboardGrafana#start_tls_policy}.

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#user DashboardGrafana#user}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#enabled DashboardGrafana#enabled}.

---

###### `from_name`<sup>Optional</sup> <a name="from_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.fromName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#from_name DashboardGrafana#from_name}.

---

###### `verification_skip_enabled`<sup>Optional</sup> <a name="verification_skip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putSmtp.parameter.verificationSkipEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#verification_skip_enabled DashboardGrafana#verification_skip_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}.

---

##### `reset_api_key_enabled` <a name="reset_api_key_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetApiKeyEnabled"></a>

```python
def reset_api_key_enabled() -> None
```

##### `reset_auto_generated_domain_name_label_scope` <a name="reset_auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAutoGeneratedDomainNameLabelScope"></a>

```python
def reset_auto_generated_domain_name_label_scope() -> None
```

##### `reset_azure_monitor_workspace_integrations` <a name="reset_azure_monitor_workspace_integrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAzureMonitorWorkspaceIntegrations"></a>

```python
def reset_azure_monitor_workspace_integrations() -> None
```

##### `reset_deterministic_outbound_ip_enabled` <a name="reset_deterministic_outbound_ip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetDeterministicOutboundIpEnabled"></a>

```python
def reset_deterministic_outbound_ip_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_smtp` <a name="reset_smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSmtp"></a>

```python
def reset_smtp() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone_redundancy_enabled` <a name="reset_zone_redundancy_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetZoneRedundancyEnabled"></a>

```python
def reset_zone_redundancy_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DashboardGrafana resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafana.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafana.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafana.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafana.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DashboardGrafana resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DashboardGrafana to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DashboardGrafana that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DashboardGrafana to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrations">azure_monitor_workspace_integrations</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaVersion">grafana_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference">DashboardGrafanaIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.outboundIp">outbound_ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtp">smtp</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference">DashboardGrafanaSmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference">DashboardGrafanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabledInput">api_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScopeInput">auto_generated_domain_name_label_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrationsInput">azure_monitor_workspace_integrations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabledInput">deterministic_outbound_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersionInput">grafana_major_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtpInput">smtp_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabledInput">zone_redundancy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabled">api_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabled">deterministic_outbound_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersion">grafana_major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_monitor_workspace_integrations`<sup>Required</sup> <a name="azure_monitor_workspace_integrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrations"></a>

```python
azure_monitor_workspace_integrations: DashboardGrafanaAzureMonitorWorkspaceIntegrationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `grafana_version`<sup>Required</sup> <a name="grafana_version" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaVersion"></a>

```python
grafana_version: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identity"></a>

```python
identity: DashboardGrafanaIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference">DashboardGrafanaIdentityOutputReference</a>

---

##### `outbound_ip`<sup>Required</sup> <a name="outbound_ip" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.outboundIp"></a>

```python
outbound_ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `smtp`<sup>Required</sup> <a name="smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtp"></a>

```python
smtp: DashboardGrafanaSmtpOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference">DashboardGrafanaSmtpOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeouts"></a>

```python
timeouts: DashboardGrafanaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference">DashboardGrafanaTimeoutsOutputReference</a>

---

##### `api_key_enabled_input`<sup>Optional</sup> <a name="api_key_enabled_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabledInput"></a>

```python
api_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_generated_domain_name_label_scope_input`<sup>Optional</sup> <a name="auto_generated_domain_name_label_scope_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScopeInput"></a>

```python
auto_generated_domain_name_label_scope_input: str
```

- *Type:* str

---

##### `azure_monitor_workspace_integrations_input`<sup>Optional</sup> <a name="azure_monitor_workspace_integrations_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrationsInput"></a>

```python
azure_monitor_workspace_integrations_input: typing.Union[IResolvable, typing.List[DashboardGrafanaAzureMonitorWorkspaceIntegrations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]

---

##### `deterministic_outbound_ip_enabled_input`<sup>Optional</sup> <a name="deterministic_outbound_ip_enabled_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabledInput"></a>

```python
deterministic_outbound_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grafana_major_version_input`<sup>Optional</sup> <a name="grafana_major_version_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersionInput"></a>

```python
grafana_major_version_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identityInput"></a>

```python
identity_input: DashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `smtp_input`<sup>Optional</sup> <a name="smtp_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.smtpInput"></a>

```python
smtp_input: DashboardGrafanaSmtp
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DashboardGrafanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>]

---

##### `zone_redundancy_enabled_input`<sup>Optional</sup> <a name="zone_redundancy_enabled_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabledInput"></a>

```python
zone_redundancy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_key_enabled`<sup>Required</sup> <a name="api_key_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabled"></a>

```python
api_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_generated_domain_name_label_scope`<sup>Required</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScope"></a>

```python
auto_generated_domain_name_label_scope: str
```

- *Type:* str

---

##### `deterministic_outbound_ip_enabled`<sup>Required</sup> <a name="deterministic_outbound_ip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabled"></a>

```python
deterministic_outbound_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grafana_major_version`<sup>Required</sup> <a name="grafana_major_version" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaMajorVersion"></a>

```python
grafana_major_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone_redundancy_enabled`<sup>Required</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabled"></a>

```python
zone_redundancy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardGrafanaAzureMonitorWorkspaceIntegrations <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations(
  resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#resource_id DashboardGrafana#resource_id}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#resource_id DashboardGrafana#resource_id}.

---

### DashboardGrafanaConfig <a name="DashboardGrafanaConfig" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  grafana_major_version: str,
  location: str,
  name: str,
  resource_group_name: str,
  api_key_enabled: typing.Union[bool, IResolvable] = None,
  auto_generated_domain_name_label_scope: str = None,
  azure_monitor_workspace_integrations: typing.Union[IResolvable, typing.List[DashboardGrafanaAzureMonitorWorkspaceIntegrations]] = None,
  deterministic_outbound_ip_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: DashboardGrafanaIdentity = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  sku: str = None,
  smtp: DashboardGrafanaSmtp = None,
  tags: typing.Mapping[str] = None,
  timeouts: DashboardGrafanaTimeouts = None,
  zone_redundancy_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.grafanaMajorVersion">grafana_major_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#grafana_major_version DashboardGrafana#grafana_major_version}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.apiKeyEnabled">api_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.azureMonitorWorkspaceIntegrations">azure_monitor_workspace_integrations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]</code> | azure_monitor_workspace_integrations block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.deterministicOutboundIpEnabled">deterministic_outbound_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.smtp">smtp</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | smtp block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grafana_major_version`<sup>Required</sup> <a name="grafana_major_version" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.grafanaMajorVersion"></a>

```python
grafana_major_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#grafana_major_version DashboardGrafana#grafana_major_version}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}.

---

##### `api_key_enabled`<sup>Optional</sup> <a name="api_key_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.apiKeyEnabled"></a>

```python
api_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}.

---

##### `auto_generated_domain_name_label_scope`<sup>Optional</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.autoGeneratedDomainNameLabelScope"></a>

```python
auto_generated_domain_name_label_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}.

---

##### `azure_monitor_workspace_integrations`<sup>Optional</sup> <a name="azure_monitor_workspace_integrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.azureMonitorWorkspaceIntegrations"></a>

```python
azure_monitor_workspace_integrations: typing.Union[IResolvable, typing.List[DashboardGrafanaAzureMonitorWorkspaceIntegrations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]

azure_monitor_workspace_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#azure_monitor_workspace_integrations DashboardGrafana#azure_monitor_workspace_integrations}

---

##### `deterministic_outbound_ip_enabled`<sup>Optional</sup> <a name="deterministic_outbound_ip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.deterministicOutboundIpEnabled"></a>

```python
deterministic_outbound_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.identity"></a>

```python
identity: DashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#identity DashboardGrafana#identity}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}.

---

##### `smtp`<sup>Optional</sup> <a name="smtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.smtp"></a>

```python
smtp: DashboardGrafanaSmtp
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

smtp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#smtp DashboardGrafana#smtp}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.timeouts"></a>

```python
timeouts: DashboardGrafanaTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#timeouts DashboardGrafana#timeouts}

---

##### `zone_redundancy_enabled`<sup>Optional</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.zoneRedundancyEnabled"></a>

```python
zone_redundancy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}.

---

### DashboardGrafanaIdentity <a name="DashboardGrafanaIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}.

---

### DashboardGrafanaSmtp <a name="DashboardGrafanaSmtp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaSmtp(
  from_address: str,
  host: str,
  password: str,
  start_tls_policy: str,
  user: str,
  enabled: typing.Union[bool, IResolvable] = None,
  from_name: str = None,
  verification_skip_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromAddress">from_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#from_address DashboardGrafana#from_address}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#host DashboardGrafana#host}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#password DashboardGrafana#password}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.startTlsPolicy">start_tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#start_tls_policy DashboardGrafana#start_tls_policy}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#user DashboardGrafana#user}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#enabled DashboardGrafana#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromName">from_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#from_name DashboardGrafana#from_name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.verificationSkipEnabled">verification_skip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#verification_skip_enabled DashboardGrafana#verification_skip_enabled}. |

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromAddress"></a>

```python
from_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#from_address DashboardGrafana#from_address}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#host DashboardGrafana#host}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#password DashboardGrafana#password}.

---

##### `start_tls_policy`<sup>Required</sup> <a name="start_tls_policy" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.startTlsPolicy"></a>

```python
start_tls_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#start_tls_policy DashboardGrafana#start_tls_policy}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#user DashboardGrafana#user}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#enabled DashboardGrafana#enabled}.

---

##### `from_name`<sup>Optional</sup> <a name="from_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.fromName"></a>

```python
from_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#from_name DashboardGrafana#from_name}.

---

##### `verification_skip_enabled`<sup>Optional</sup> <a name="verification_skip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp.property.verificationSkipEnabled"></a>

```python
verification_skip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#verification_skip_enabled DashboardGrafana#verification_skip_enabled}.

---

### DashboardGrafanaTimeouts <a name="DashboardGrafanaTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardGrafanaAzureMonitorWorkspaceIntegrationsList <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrationsList" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DashboardGrafanaAzureMonitorWorkspaceIntegrations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]]

---


### DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DashboardGrafanaAzureMonitorWorkspaceIntegrations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>]

---


### DashboardGrafanaIdentityOutputReference <a name="DashboardGrafanaIdentityOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---


### DashboardGrafanaSmtpOutputReference <a name="DashboardGrafanaSmtpOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaSmtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetFromName">reset_from_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetVerificationSkipEnabled">reset_verification_skip_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_from_name` <a name="reset_from_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetFromName"></a>

```python
def reset_from_name() -> None
```

##### `reset_verification_skip_enabled` <a name="reset_verification_skip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.resetVerificationSkipEnabled"></a>

```python
def reset_verification_skip_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddressInput">from_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromNameInput">from_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicyInput">start_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabledInput">verification_skip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddress">from_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromName">from_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicy">start_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabled">verification_skip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_address_input`<sup>Optional</sup> <a name="from_address_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddressInput"></a>

```python
from_address_input: str
```

- *Type:* str

---

##### `from_name_input`<sup>Optional</sup> <a name="from_name_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromNameInput"></a>

```python
from_name_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `start_tls_policy_input`<sup>Optional</sup> <a name="start_tls_policy_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicyInput"></a>

```python
start_tls_policy_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `verification_skip_enabled_input`<sup>Optional</sup> <a name="verification_skip_enabled_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabledInput"></a>

```python
verification_skip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromAddress"></a>

```python
from_address: str
```

- *Type:* str

---

##### `from_name`<sup>Required</sup> <a name="from_name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.fromName"></a>

```python
from_name: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `start_tls_policy`<sup>Required</sup> <a name="start_tls_policy" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.startTlsPolicy"></a>

```python
start_tls_policy: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `verification_skip_enabled`<sup>Required</sup> <a name="verification_skip_enabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.verificationSkipEnabled"></a>

```python
verification_skip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtpOutputReference.property.internalValue"></a>

```python
internal_value: DashboardGrafanaSmtp
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaSmtp">DashboardGrafanaSmtp</a>

---


### DashboardGrafanaTimeoutsOutputReference <a name="DashboardGrafanaTimeoutsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dashboard_grafana

dashboardGrafana.DashboardGrafanaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DashboardGrafanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>]

---



