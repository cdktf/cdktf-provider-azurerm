# `redhatOpenshiftCluster` Submodule <a name="`redhatOpenshiftCluster` Submodule" id="@cdktf/provider-azurerm.redhatOpenshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedhatOpenshiftCluster <a name="RedhatOpenshiftCluster" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster azurerm_redhat_openshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_server_profile: RedhatOpenshiftClusterApiServerProfile,
  cluster_profile: RedhatOpenshiftClusterClusterProfile,
  ingress_profile: RedhatOpenshiftClusterIngressProfile,
  location: str,
  main_profile: RedhatOpenshiftClusterMainProfile,
  name: str,
  network_profile: RedhatOpenshiftClusterNetworkProfile,
  resource_group_name: str,
  service_principal: RedhatOpenshiftClusterServicePrincipal,
  worker_profile: RedhatOpenshiftClusterWorkerProfile,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: RedhatOpenshiftClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.apiServerProfile">api_server_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | api_server_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.clusterProfile">cluster_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | cluster_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.ingressProfile">ingress_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | ingress_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.mainProfile">main_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | main_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.servicePrincipal">service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.workerProfile">worker_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | worker_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_server_profile`<sup>Required</sup> <a name="api_server_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.apiServerProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

api_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#api_server_profile RedhatOpenshiftCluster#api_server_profile}

---

##### `cluster_profile`<sup>Required</sup> <a name="cluster_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.clusterProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

cluster_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#cluster_profile RedhatOpenshiftCluster#cluster_profile}

---

##### `ingress_profile`<sup>Required</sup> <a name="ingress_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.ingressProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

ingress_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#ingress_profile RedhatOpenshiftCluster#ingress_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}.

---

##### `main_profile`<sup>Required</sup> <a name="main_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.mainProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

main_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#main_profile RedhatOpenshiftCluster#main_profile}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}.

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#network_profile RedhatOpenshiftCluster#network_profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}.

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.servicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#service_principal RedhatOpenshiftCluster#service_principal}

---

##### `worker_profile`<sup>Required</sup> <a name="worker_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.workerProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

worker_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#worker_profile RedhatOpenshiftCluster#worker_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#timeouts RedhatOpenshiftCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile">put_api_server_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile">put_cluster_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile">put_ingress_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile">put_main_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile">put_network_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal">put_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile">put_worker_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_server_profile` <a name="put_api_server_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile"></a>

```python
def put_api_server_profile(
  visibility: str
) -> None
```

###### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

##### `put_cluster_profile` <a name="put_cluster_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile"></a>

```python
def put_cluster_profile(
  domain: str,
  version: str,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  managed_resource_group_name: str = None,
  pull_secret: str = None
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}.

---

###### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.fipsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}.

---

###### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.managedResourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}.

---

###### `pull_secret`<sup>Optional</sup> <a name="pull_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.pullSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}.

---

##### `put_ingress_profile` <a name="put_ingress_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile"></a>

```python
def put_ingress_profile(
  visibility: str
) -> None
```

###### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

##### `put_main_profile` <a name="put_main_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile"></a>

```python
def put_main_profile(
  subnet_id: str,
  vm_size: str,
  disk_encryption_set_id: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

###### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.diskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

###### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.encryptionAtHostEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

##### `put_network_profile` <a name="put_network_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile"></a>

```python
def put_network_profile(
  pod_cidr: str,
  service_cidr: str,
  outbound_type: str = None,
  preconfigured_network_security_group_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.podCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}.

---

###### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.serviceCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}.

---

###### `outbound_type`<sup>Optional</sup> <a name="outbound_type" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.outboundType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}.

---

###### `preconfigured_network_security_group_enabled`<sup>Optional</sup> <a name="preconfigured_network_security_group_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.preconfiguredNetworkSecurityGroupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}.

---

##### `put_service_principal` <a name="put_service_principal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal"></a>

```python
def put_service_principal(
  client_id: str,
  client_secret: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}.

---

##### `put_worker_profile` <a name="put_worker_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile"></a>

```python
def put_worker_profile(
  disk_size_gb: typing.Union[int, float],
  node_count: typing.Union[int, float],
  subnet_id: str,
  vm_size: str,
  disk_encryption_set_id: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}.

---

###### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

###### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

###### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.diskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

###### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.encryptionAtHostEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedhatOpenshiftCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedhatOpenshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedhatOpenshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile">api_server_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile">cluster_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl">console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile">ingress_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile">main_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal">service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile">worker_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput">api_server_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput">cluster_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput">ingress_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput">main_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput">network_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput">service_principal_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput">worker_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_server_profile`<sup>Required</sup> <a name="api_server_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile"></a>

```python
api_server_profile: RedhatOpenshiftClusterApiServerProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a>

---

##### `cluster_profile`<sup>Required</sup> <a name="cluster_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile"></a>

```python
cluster_profile: RedhatOpenshiftClusterClusterProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a>

---

##### `console_url`<sup>Required</sup> <a name="console_url" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl"></a>

```python
console_url: str
```

- *Type:* str

---

##### `ingress_profile`<sup>Required</sup> <a name="ingress_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile"></a>

```python
ingress_profile: RedhatOpenshiftClusterIngressProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a>

---

##### `main_profile`<sup>Required</sup> <a name="main_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile"></a>

```python
main_profile: RedhatOpenshiftClusterMainProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a>

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile"></a>

```python
network_profile: RedhatOpenshiftClusterNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a>

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal"></a>

```python
service_principal: RedhatOpenshiftClusterServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts"></a>

```python
timeouts: RedhatOpenshiftClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a>

---

##### `worker_profile`<sup>Required</sup> <a name="worker_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile"></a>

```python
worker_profile: RedhatOpenshiftClusterWorkerProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a>

---

##### `api_server_profile_input`<sup>Optional</sup> <a name="api_server_profile_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput"></a>

```python
api_server_profile_input: RedhatOpenshiftClusterApiServerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `cluster_profile_input`<sup>Optional</sup> <a name="cluster_profile_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput"></a>

```python
cluster_profile_input: RedhatOpenshiftClusterClusterProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_profile_input`<sup>Optional</sup> <a name="ingress_profile_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput"></a>

```python
ingress_profile_input: RedhatOpenshiftClusterIngressProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `main_profile_input`<sup>Optional</sup> <a name="main_profile_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput"></a>

```python
main_profile_input: RedhatOpenshiftClusterMainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_profile_input`<sup>Optional</sup> <a name="network_profile_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput"></a>

```python
network_profile_input: RedhatOpenshiftClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_principal_input`<sup>Optional</sup> <a name="service_principal_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput"></a>

```python
service_principal_input: RedhatOpenshiftClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedhatOpenshiftClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>]

---

##### `worker_profile_input`<sup>Optional</sup> <a name="worker_profile_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput"></a>

```python
worker_profile_input: RedhatOpenshiftClusterWorkerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedhatOpenshiftClusterApiServerProfile <a name="RedhatOpenshiftClusterApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile(
  visibility: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterClusterProfile <a name="RedhatOpenshiftClusterClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile(
  domain: str,
  version: str,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  managed_resource_group_name: str = None,
  pull_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret">pull_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}.

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}.

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}.

---

##### `pull_secret`<sup>Optional</sup> <a name="pull_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret"></a>

```python
pull_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}.

---

### RedhatOpenshiftClusterConfig <a name="RedhatOpenshiftClusterConfig" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_server_profile: RedhatOpenshiftClusterApiServerProfile,
  cluster_profile: RedhatOpenshiftClusterClusterProfile,
  ingress_profile: RedhatOpenshiftClusterIngressProfile,
  location: str,
  main_profile: RedhatOpenshiftClusterMainProfile,
  name: str,
  network_profile: RedhatOpenshiftClusterNetworkProfile,
  resource_group_name: str,
  service_principal: RedhatOpenshiftClusterServicePrincipal,
  worker_profile: RedhatOpenshiftClusterWorkerProfile,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: RedhatOpenshiftClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile">api_server_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | api_server_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile">cluster_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | cluster_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile">ingress_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | ingress_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile">main_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | main_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal">service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile">worker_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | worker_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_server_profile`<sup>Required</sup> <a name="api_server_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile"></a>

```python
api_server_profile: RedhatOpenshiftClusterApiServerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

api_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#api_server_profile RedhatOpenshiftCluster#api_server_profile}

---

##### `cluster_profile`<sup>Required</sup> <a name="cluster_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile"></a>

```python
cluster_profile: RedhatOpenshiftClusterClusterProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

cluster_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#cluster_profile RedhatOpenshiftCluster#cluster_profile}

---

##### `ingress_profile`<sup>Required</sup> <a name="ingress_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile"></a>

```python
ingress_profile: RedhatOpenshiftClusterIngressProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

ingress_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#ingress_profile RedhatOpenshiftCluster#ingress_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}.

---

##### `main_profile`<sup>Required</sup> <a name="main_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile"></a>

```python
main_profile: RedhatOpenshiftClusterMainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

main_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#main_profile RedhatOpenshiftCluster#main_profile}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}.

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile"></a>

```python
network_profile: RedhatOpenshiftClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#network_profile RedhatOpenshiftCluster#network_profile}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}.

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal"></a>

```python
service_principal: RedhatOpenshiftClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#service_principal RedhatOpenshiftCluster#service_principal}

---

##### `worker_profile`<sup>Required</sup> <a name="worker_profile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile"></a>

```python
worker_profile: RedhatOpenshiftClusterWorkerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

worker_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#worker_profile RedhatOpenshiftCluster#worker_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts"></a>

```python
timeouts: RedhatOpenshiftClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#timeouts RedhatOpenshiftCluster#timeouts}

---

### RedhatOpenshiftClusterIngressProfile <a name="RedhatOpenshiftClusterIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile(
  visibility: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterMainProfile <a name="RedhatOpenshiftClusterMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile(
  subnet_id: str,
  vm_size: str,
  disk_encryption_set_id: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

### RedhatOpenshiftClusterNetworkProfile <a name="RedhatOpenshiftClusterNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile(
  pod_cidr: str,
  service_cidr: str,
  outbound_type: str = None,
  preconfigured_network_security_group_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr">pod_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr">service_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType">outbound_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled">preconfigured_network_security_group_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}. |

---

##### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr"></a>

```python
pod_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}.

---

##### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr"></a>

```python
service_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}.

---

##### `outbound_type`<sup>Optional</sup> <a name="outbound_type" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType"></a>

```python
outbound_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}.

---

##### `preconfigured_network_security_group_enabled`<sup>Optional</sup> <a name="preconfigured_network_security_group_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```python
preconfigured_network_security_group_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}.

---

### RedhatOpenshiftClusterServicePrincipal <a name="RedhatOpenshiftClusterServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal(
  client_id: str,
  client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}.

---

### RedhatOpenshiftClusterTimeouts <a name="RedhatOpenshiftClusterTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}.

---

### RedhatOpenshiftClusterWorkerProfile <a name="RedhatOpenshiftClusterWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile(
  disk_size_gb: typing.Union[int, float],
  node_count: typing.Union[int, float],
  subnet_id: str,
  vm_size: str,
  disk_encryption_set_id: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}.

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedhatOpenshiftClusterApiServerProfileOutputReference <a name="RedhatOpenshiftClusterApiServerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterApiServerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---


### RedhatOpenshiftClusterClusterProfileOutputReference <a name="RedhatOpenshiftClusterClusterProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled">reset_fips_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName">reset_managed_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret">reset_pull_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fips_enabled` <a name="reset_fips_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled"></a>

```python
def reset_fips_enabled() -> None
```

##### `reset_managed_resource_group_name` <a name="reset_managed_resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName"></a>

```python
def reset_managed_resource_group_name() -> None
```

##### `reset_pull_secret` <a name="reset_pull_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret"></a>

```python
def reset_pull_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput">fips_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput">managed_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput">pull_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret">pull_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `fips_enabled_input`<sup>Optional</sup> <a name="fips_enabled_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput"></a>

```python
fips_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_resource_group_name_input`<sup>Optional</sup> <a name="managed_resource_group_name_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput"></a>

```python
managed_resource_group_name_input: str
```

- *Type:* str

---

##### `pull_secret_input`<sup>Optional</sup> <a name="pull_secret_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput"></a>

```python
pull_secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `fips_enabled`<sup>Required</sup> <a name="fips_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_resource_group_name`<sup>Required</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

---

##### `pull_secret`<sup>Required</sup> <a name="pull_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret"></a>

```python
pull_secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterClusterProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---


### RedhatOpenshiftClusterIngressProfileOutputReference <a name="RedhatOpenshiftClusterIngressProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterIngressProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---


### RedhatOpenshiftClusterMainProfileOutputReference <a name="RedhatOpenshiftClusterMainProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterMainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---


### RedhatOpenshiftClusterNetworkProfileOutputReference <a name="RedhatOpenshiftClusterNetworkProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType">reset_outbound_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled">reset_preconfigured_network_security_group_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_outbound_type` <a name="reset_outbound_type" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType"></a>

```python
def reset_outbound_type() -> None
```

##### `reset_preconfigured_network_security_group_enabled` <a name="reset_preconfigured_network_security_group_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled"></a>

```python
def reset_preconfigured_network_security_group_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput">outbound_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput">pod_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput">preconfigured_network_security_group_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput">service_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType">outbound_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr">pod_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled">preconfigured_network_security_group_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr">service_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound_type_input`<sup>Optional</sup> <a name="outbound_type_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput"></a>

```python
outbound_type_input: str
```

- *Type:* str

---

##### `pod_cidr_input`<sup>Optional</sup> <a name="pod_cidr_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput"></a>

```python
pod_cidr_input: str
```

- *Type:* str

---

##### `preconfigured_network_security_group_enabled_input`<sup>Optional</sup> <a name="preconfigured_network_security_group_enabled_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput"></a>

```python
preconfigured_network_security_group_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_cidr_input`<sup>Optional</sup> <a name="service_cidr_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput"></a>

```python
service_cidr_input: str
```

- *Type:* str

---

##### `outbound_type`<sup>Required</sup> <a name="outbound_type" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType"></a>

```python
outbound_type: str
```

- *Type:* str

---

##### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr"></a>

```python
pod_cidr: str
```

- *Type:* str

---

##### `preconfigured_network_security_group_enabled`<sup>Required</sup> <a name="preconfigured_network_security_group_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```python
preconfigured_network_security_group_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr"></a>

```python
service_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---


### RedhatOpenshiftClusterServicePrincipalOutputReference <a name="RedhatOpenshiftClusterServicePrincipalOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---


### RedhatOpenshiftClusterTimeoutsOutputReference <a name="RedhatOpenshiftClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedhatOpenshiftClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>]

---


### RedhatOpenshiftClusterWorkerProfileOutputReference <a name="RedhatOpenshiftClusterWorkerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redhat_openshift_cluster

redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue"></a>

```python
internal_value: RedhatOpenshiftClusterWorkerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---



