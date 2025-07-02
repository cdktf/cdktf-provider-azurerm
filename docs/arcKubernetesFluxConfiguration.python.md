# `arcKubernetesFluxConfiguration` Submodule <a name="`arcKubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesFluxConfiguration <a name="ArcKubernetesFluxConfiguration" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration azurerm_arc_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  kustomizations: typing.Union[IResolvable, typing.List[ArcKubernetesFluxConfigurationKustomizations]],
  name: str,
  namespace: str,
  blob_storage: ArcKubernetesFluxConfigurationBlobStorage = None,
  bucket: ArcKubernetesFluxConfigurationBucket = None,
  continuous_reconciliation_enabled: typing.Union[bool, IResolvable] = None,
  git_repository: ArcKubernetesFluxConfigurationGitRepository = None,
  id: str = None,
  scope: str = None,
  timeouts: ArcKubernetesFluxConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.kustomizations">kustomizations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.blobStorage">blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.continuousReconciliationEnabled">continuous_reconciliation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.gitRepository">git_repository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.kustomizations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#kustomizations ArcKubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}.

---

##### `blob_storage`<sup>Optional</sup> <a name="blob_storage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.blobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#blob_storage ArcKubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.bucket"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#bucket ArcKubernetesFluxConfiguration#bucket}

---

##### `continuous_reconciliation_enabled`<sup>Optional</sup> <a name="continuous_reconciliation_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.continuousReconciliationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `git_repository`<sup>Optional</sup> <a name="git_repository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.gitRepository"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#git_repository ArcKubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeouts ArcKubernetesFluxConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage">put_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket">put_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository">put_git_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations">put_kustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage">reset_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled">reset_continuous_reconciliation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository">reset_git_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_blob_storage` <a name="put_blob_storage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage"></a>

```python
def put_blob_storage(
  container_id: str,
  account_key: str = None,
  local_auth_reference: str = None,
  sas_token: str = None,
  service_principal: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.containerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}.

---

###### `account_key`<sup>Optional</sup> <a name="account_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.accountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}.

---

###### `local_auth_reference`<sup>Optional</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.localAuthReference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

###### `sas_token`<sup>Optional</sup> <a name="sas_token" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.sasToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}.

---

###### `service_principal`<sup>Optional</sup> <a name="service_principal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.servicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#service_principal ArcKubernetesFluxConfiguration#service_principal}

---

###### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.syncIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `put_bucket` <a name="put_bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket"></a>

```python
def put_bucket(
  bucket_name: str,
  url: str,
  access_key: str = None,
  local_auth_reference: str = None,
  secret_key_base64: str = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  tls_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}.

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

###### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.accessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}.

---

###### `local_auth_reference`<sup>Optional</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.localAuthReference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

###### `secret_key_base64`<sup>Optional</sup> <a name="secret_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.secretKeyBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}.

---

###### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.syncIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

###### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.tlsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}.

---

##### `put_git_repository` <a name="put_git_repository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository"></a>

```python
def put_git_repository(
  reference_type: str,
  reference_value: str,
  url: str,
  https_ca_cert_base64: str = None,
  https_key_base64: str = None,
  https_user: str = None,
  local_auth_reference: str = None,
  ssh_known_hosts_base64: str = None,
  ssh_private_key_base64: str = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `reference_type`<sup>Required</sup> <a name="reference_type" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.referenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}.

---

###### `reference_value`<sup>Required</sup> <a name="reference_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.referenceValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}.

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

###### `https_ca_cert_base64`<sup>Optional</sup> <a name="https_ca_cert_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.httpsCaCertBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}.

---

###### `https_key_base64`<sup>Optional</sup> <a name="https_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.httpsKeyBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}.

---

###### `https_user`<sup>Optional</sup> <a name="https_user" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.httpsUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}.

---

###### `local_auth_reference`<sup>Optional</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.localAuthReference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

###### `ssh_known_hosts_base64`<sup>Optional</sup> <a name="ssh_known_hosts_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.sshKnownHostsBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

###### `ssh_private_key_base64`<sup>Optional</sup> <a name="ssh_private_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.sshPrivateKeyBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}.

---

###### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.syncIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `put_kustomizations` <a name="put_kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations"></a>

```python
def put_kustomizations(
  value: typing.Union[IResolvable, typing.List[ArcKubernetesFluxConfigurationKustomizations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}.

---

##### `reset_blob_storage` <a name="reset_blob_storage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage"></a>

```python
def reset_blob_storage() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_continuous_reconciliation_enabled` <a name="reset_continuous_reconciliation_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```python
def reset_continuous_reconciliation_enabled() -> None
```

##### `reset_git_repository` <a name="reset_git_repository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository"></a>

```python
def reset_git_repository() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ArcKubernetesFluxConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ArcKubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage">blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations">kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput">blob_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput">bucket_input</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">continuous_reconciliation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput">git_repository_input</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput">kustomizations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled">continuous_reconciliation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blob_storage`<sup>Required</sup> <a name="blob_storage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage"></a>

```python
blob_storage: ArcKubernetesFluxConfigurationBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket"></a>

```python
bucket: ArcKubernetesFluxConfigurationBucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a>

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository"></a>

```python
git_repository: ArcKubernetesFluxConfigurationGitRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations"></a>

```python
kustomizations: ArcKubernetesFluxConfigurationKustomizationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts"></a>

```python
timeouts: ArcKubernetesFluxConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `blob_storage_input`<sup>Optional</sup> <a name="blob_storage_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput"></a>

```python
blob_storage_input: ArcKubernetesFluxConfigurationBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput"></a>

```python
bucket_input: ArcKubernetesFluxConfigurationBucket
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `continuous_reconciliation_enabled_input`<sup>Optional</sup> <a name="continuous_reconciliation_enabled_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```python
continuous_reconciliation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `git_repository_input`<sup>Optional</sup> <a name="git_repository_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```python
git_repository_input: ArcKubernetesFluxConfigurationGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kustomizations_input`<sup>Optional</sup> <a name="kustomizations_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput"></a>

```python
kustomizations_input: typing.Union[IResolvable, typing.List[ArcKubernetesFluxConfigurationKustomizations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ArcKubernetesFluxConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `continuous_reconciliation_enabled`<sup>Required</sup> <a name="continuous_reconciliation_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```python
continuous_reconciliation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesFluxConfigurationBlobStorage <a name="ArcKubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage(
  container_id: str,
  account_key: str = None,
  local_auth_reference: str = None,
  sas_token: str = None,
  service_principal: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId">container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference">local_auth_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken">sas_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal">service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}.

---

##### `account_key`<sup>Optional</sup> <a name="account_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}.

---

##### `local_auth_reference`<sup>Optional</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```python
local_auth_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `sas_token`<sup>Optional</sup> <a name="sas_token" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}.

---

##### `service_principal`<sup>Optional</sup> <a name="service_principal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```python
service_principal: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#service_principal ArcKubernetesFluxConfiguration#service_principal}

---

##### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationBlobStorageServicePrincipal <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal(
  client_id: str,
  tenant_id: str,
  client_certificate_base64: str = None,
  client_certificate_password: str = None,
  client_certificate_send_chain: typing.Union[bool, IResolvable] = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">client_certificate_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">client_certificate_send_chain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}.

---

##### `client_certificate_base64`<sup>Optional</sup> <a name="client_certificate_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```python
client_certificate_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}.

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}.

---

##### `client_certificate_send_chain`<sup>Optional</sup> <a name="client_certificate_send_chain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```python
client_certificate_send_chain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}.

---

### ArcKubernetesFluxConfigurationBucket <a name="ArcKubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket(
  bucket_name: str,
  url: str,
  access_key: str = None,
  local_auth_reference: str = None,
  secret_key_base64: str = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  tls_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey">access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference">local_auth_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64">secret_key_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}.

---

##### `local_auth_reference`<sup>Optional</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```python
local_auth_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `secret_key_base64`<sup>Optional</sup> <a name="secret_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```python
secret_key_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}.

---

##### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `tls_enabled`<sup>Optional</sup> <a name="tls_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}.

---

### ArcKubernetesFluxConfigurationConfig <a name="ArcKubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  kustomizations: typing.Union[IResolvable, typing.List[ArcKubernetesFluxConfigurationKustomizations]],
  name: str,
  namespace: str,
  blob_storage: ArcKubernetesFluxConfigurationBlobStorage = None,
  bucket: ArcKubernetesFluxConfigurationBucket = None,
  continuous_reconciliation_enabled: typing.Union[bool, IResolvable] = None,
  git_repository: ArcKubernetesFluxConfigurationGitRepository = None,
  id: str = None,
  scope: str = None,
  timeouts: ArcKubernetesFluxConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations">kustomizations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage">blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">continuous_reconciliation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations"></a>

```python
kustomizations: typing.Union[IResolvable, typing.List[ArcKubernetesFluxConfigurationKustomizations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#kustomizations ArcKubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}.

---

##### `blob_storage`<sup>Optional</sup> <a name="blob_storage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage"></a>

```python
blob_storage: ArcKubernetesFluxConfigurationBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#blob_storage ArcKubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket"></a>

```python
bucket: ArcKubernetesFluxConfigurationBucket
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#bucket ArcKubernetesFluxConfiguration#bucket}

---

##### `continuous_reconciliation_enabled`<sup>Optional</sup> <a name="continuous_reconciliation_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```python
continuous_reconciliation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `git_repository`<sup>Optional</sup> <a name="git_repository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository"></a>

```python
git_repository: ArcKubernetesFluxConfigurationGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#git_repository ArcKubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts"></a>

```python
timeouts: ArcKubernetesFluxConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeouts ArcKubernetesFluxConfiguration#timeouts}

---

### ArcKubernetesFluxConfigurationGitRepository <a name="ArcKubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository(
  reference_type: str,
  reference_value: str,
  url: str,
  https_ca_cert_base64: str = None,
  https_key_base64: str = None,
  https_user: str = None,
  local_auth_reference: str = None,
  ssh_known_hosts_base64: str = None,
  ssh_private_key_base64: str = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType">reference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue">reference_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">https_ca_cert_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">https_key_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser">https_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference">local_auth_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">ssh_known_hosts_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">ssh_private_key_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `reference_type`<sup>Required</sup> <a name="reference_type" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```python
reference_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}.

---

##### `reference_value`<sup>Required</sup> <a name="reference_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```python
reference_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `https_ca_cert_base64`<sup>Optional</sup> <a name="https_ca_cert_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```python
https_ca_cert_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `https_key_base64`<sup>Optional</sup> <a name="https_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```python
https_key_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}.

---

##### `https_user`<sup>Optional</sup> <a name="https_user" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```python
https_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}.

---

##### `local_auth_reference`<sup>Optional</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```python
local_auth_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `ssh_known_hosts_base64`<sup>Optional</sup> <a name="ssh_known_hosts_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```python
ssh_known_hosts_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `ssh_private_key_base64`<sup>Optional</sup> <a name="ssh_private_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```python
ssh_private_key_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationKustomizations <a name="ArcKubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations(
  name: str,
  depends_on: typing.List[str] = None,
  garbage_collection_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  recreating_enabled: typing.Union[bool, IResolvable] = None,
  retry_interval_in_seconds: typing.Union[int, float] = None,
  sync_interval_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">garbage_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled">recreating_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">retry_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}.

---

##### `garbage_collection_enabled`<sup>Optional</sup> <a name="garbage_collection_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```python
garbage_collection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}.

---

##### `recreating_enabled`<sup>Optional</sup> <a name="recreating_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```python
recreating_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}.

---

##### `retry_interval_in_seconds`<sup>Optional</sup> <a name="retry_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```python
retry_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `sync_interval_in_seconds`<sup>Optional</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationTimeouts <a name="ArcKubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesFluxConfigurationBlobStorageOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">put_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">reset_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">reset_local_auth_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">reset_sas_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">reset_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">reset_sync_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_principal` <a name="put_service_principal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```python
def put_service_principal(
  client_id: str,
  tenant_id: str,
  client_certificate_base64: str = None,
  client_certificate_password: str = None,
  client_certificate_send_chain: typing.Union[bool, IResolvable] = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}.

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}.

---

###### `client_certificate_base64`<sup>Optional</sup> <a name="client_certificate_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.clientCertificateBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}.

---

###### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.clientCertificatePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}.

---

###### `client_certificate_send_chain`<sup>Optional</sup> <a name="client_certificate_send_chain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.clientCertificateSendChain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}.

---

##### `reset_account_key` <a name="reset_account_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```python
def reset_account_key() -> None
```

##### `reset_local_auth_reference` <a name="reset_local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```python
def reset_local_auth_reference() -> None
```

##### `reset_sas_token` <a name="reset_sas_token" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```python
def reset_sas_token() -> None
```

##### `reset_service_principal` <a name="reset_service_principal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```python
def reset_service_principal() -> None
```

##### `reset_sync_interval_in_seconds` <a name="reset_sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```python
def reset_sync_interval_in_seconds() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">local_auth_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">service_principal_input</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">sync_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">local_auth_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```python
service_principal: ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `account_key_input`<sup>Optional</sup> <a name="account_key_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```python
account_key_input: str
```

- *Type:* str

---

##### `container_id_input`<sup>Optional</sup> <a name="container_id_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```python
container_id_input: str
```

- *Type:* str

---

##### `local_auth_reference_input`<sup>Optional</sup> <a name="local_auth_reference_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```python
local_auth_reference_input: str
```

- *Type:* str

---

##### `sas_token_input`<sup>Optional</sup> <a name="sas_token_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```python
sas_token_input: str
```

- *Type:* str

---

##### `service_principal_input`<sup>Optional</sup> <a name="service_principal_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```python
service_principal_input: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `sync_interval_in_seconds_input`<sup>Optional</sup> <a name="sync_interval_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```python
sync_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `local_auth_reference`<sup>Required</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```python
local_auth_reference: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `sync_interval_in_seconds`<sup>Required</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```python
internal_value: ArcKubernetesFluxConfigurationBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---


### ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">reset_client_certificate_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">reset_client_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">reset_client_certificate_send_chain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_certificate_base64` <a name="reset_client_certificate_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```python
def reset_client_certificate_base64() -> None
```

##### `reset_client_certificate_password` <a name="reset_client_certificate_password" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```python
def reset_client_certificate_password() -> None
```

##### `reset_client_certificate_send_chain` <a name="reset_client_certificate_send_chain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```python
def reset_client_certificate_send_chain() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">client_certificate_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">client_certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">client_certificate_send_chain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">client_certificate_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">client_certificate_send_chain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate_base64_input`<sup>Optional</sup> <a name="client_certificate_base64_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```python
client_certificate_base64_input: str
```

- *Type:* str

---

##### `client_certificate_password_input`<sup>Optional</sup> <a name="client_certificate_password_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```python
client_certificate_password_input: str
```

- *Type:* str

---

##### `client_certificate_send_chain_input`<sup>Optional</sup> <a name="client_certificate_send_chain_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```python
client_certificate_send_chain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_certificate_base64`<sup>Required</sup> <a name="client_certificate_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```python
client_certificate_base64: str
```

- *Type:* str

---

##### `client_certificate_password`<sup>Required</sup> <a name="client_certificate_password" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

---

##### `client_certificate_send_chain`<sup>Required</sup> <a name="client_certificate_send_chain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```python
client_certificate_send_chain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### ArcKubernetesFluxConfigurationBucketOutputReference <a name="ArcKubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">reset_local_auth_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">reset_secret_key_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">reset_sync_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">reset_tls_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_key` <a name="reset_access_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_local_auth_reference` <a name="reset_local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```python
def reset_local_auth_reference() -> None
```

##### `reset_secret_key_base64` <a name="reset_secret_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```python
def reset_secret_key_base64() -> None
```

##### `reset_sync_interval_in_seconds` <a name="reset_sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```python
def reset_sync_interval_in_seconds() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

##### `reset_tls_enabled` <a name="reset_tls_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```python
def reset_tls_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">local_auth_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">secret_key_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">sync_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">tls_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">local_auth_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">secret_key_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">tls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `local_auth_reference_input`<sup>Optional</sup> <a name="local_auth_reference_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```python
local_auth_reference_input: str
```

- *Type:* str

---

##### `secret_key_base64_input`<sup>Optional</sup> <a name="secret_key_base64_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```python
secret_key_base64_input: str
```

- *Type:* str

---

##### `sync_interval_in_seconds_input`<sup>Optional</sup> <a name="sync_interval_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```python
sync_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_enabled_input`<sup>Optional</sup> <a name="tls_enabled_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```python
tls_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `local_auth_reference`<sup>Required</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```python
local_auth_reference: str
```

- *Type:* str

---

##### `secret_key_base64`<sup>Required</sup> <a name="secret_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```python
secret_key_base64: str
```

- *Type:* str

---

##### `sync_interval_in_seconds`<sup>Required</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_enabled`<sup>Required</sup> <a name="tls_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```python
tls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```python
internal_value: ArcKubernetesFluxConfigurationBucket
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---


### ArcKubernetesFluxConfigurationGitRepositoryOutputReference <a name="ArcKubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">reset_https_ca_cert_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">reset_https_key_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">reset_https_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">reset_local_auth_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">reset_ssh_known_hosts_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">reset_ssh_private_key_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">reset_sync_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_https_ca_cert_base64` <a name="reset_https_ca_cert_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```python
def reset_https_ca_cert_base64() -> None
```

##### `reset_https_key_base64` <a name="reset_https_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```python
def reset_https_key_base64() -> None
```

##### `reset_https_user` <a name="reset_https_user" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```python
def reset_https_user() -> None
```

##### `reset_local_auth_reference` <a name="reset_local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```python
def reset_local_auth_reference() -> None
```

##### `reset_ssh_known_hosts_base64` <a name="reset_ssh_known_hosts_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```python
def reset_ssh_known_hosts_base64() -> None
```

##### `reset_ssh_private_key_base64` <a name="reset_ssh_private_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```python
def reset_ssh_private_key_base64() -> None
```

##### `reset_sync_interval_in_seconds` <a name="reset_sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```python
def reset_sync_interval_in_seconds() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">https_ca_cert_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">https_key_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">https_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">local_auth_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">reference_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">reference_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">ssh_known_hosts_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">ssh_private_key_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">sync_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">https_ca_cert_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">https_key_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">https_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">local_auth_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">reference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">reference_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">ssh_known_hosts_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">ssh_private_key_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `https_ca_cert_base64_input`<sup>Optional</sup> <a name="https_ca_cert_base64_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```python
https_ca_cert_base64_input: str
```

- *Type:* str

---

##### `https_key_base64_input`<sup>Optional</sup> <a name="https_key_base64_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```python
https_key_base64_input: str
```

- *Type:* str

---

##### `https_user_input`<sup>Optional</sup> <a name="https_user_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```python
https_user_input: str
```

- *Type:* str

---

##### `local_auth_reference_input`<sup>Optional</sup> <a name="local_auth_reference_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```python
local_auth_reference_input: str
```

- *Type:* str

---

##### `reference_type_input`<sup>Optional</sup> <a name="reference_type_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```python
reference_type_input: str
```

- *Type:* str

---

##### `reference_value_input`<sup>Optional</sup> <a name="reference_value_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```python
reference_value_input: str
```

- *Type:* str

---

##### `ssh_known_hosts_base64_input`<sup>Optional</sup> <a name="ssh_known_hosts_base64_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```python
ssh_known_hosts_base64_input: str
```

- *Type:* str

---

##### `ssh_private_key_base64_input`<sup>Optional</sup> <a name="ssh_private_key_base64_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```python
ssh_private_key_base64_input: str
```

- *Type:* str

---

##### `sync_interval_in_seconds_input`<sup>Optional</sup> <a name="sync_interval_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```python
sync_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `https_ca_cert_base64`<sup>Required</sup> <a name="https_ca_cert_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```python
https_ca_cert_base64: str
```

- *Type:* str

---

##### `https_key_base64`<sup>Required</sup> <a name="https_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```python
https_key_base64: str
```

- *Type:* str

---

##### `https_user`<sup>Required</sup> <a name="https_user" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```python
https_user: str
```

- *Type:* str

---

##### `local_auth_reference`<sup>Required</sup> <a name="local_auth_reference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```python
local_auth_reference: str
```

- *Type:* str

---

##### `reference_type`<sup>Required</sup> <a name="reference_type" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```python
reference_type: str
```

- *Type:* str

---

##### `reference_value`<sup>Required</sup> <a name="reference_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```python
reference_value: str
```

- *Type:* str

---

##### `ssh_known_hosts_base64`<sup>Required</sup> <a name="ssh_known_hosts_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```python
ssh_known_hosts_base64: str
```

- *Type:* str

---

##### `ssh_private_key_base64`<sup>Required</sup> <a name="ssh_private_key_base64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```python
ssh_private_key_base64: str
```

- *Type:* str

---

##### `sync_interval_in_seconds`<sup>Required</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: ArcKubernetesFluxConfigurationGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---


### ArcKubernetesFluxConfigurationKustomizationsList <a name="ArcKubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ArcKubernetesFluxConfigurationKustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ArcKubernetesFluxConfigurationKustomizations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]]

---


### ArcKubernetesFluxConfigurationKustomizationsOutputReference <a name="ArcKubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">reset_garbage_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">reset_recreating_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">reset_retry_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">reset_sync_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_garbage_collection_enabled` <a name="reset_garbage_collection_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```python
def reset_garbage_collection_enabled() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_recreating_enabled` <a name="reset_recreating_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```python
def reset_recreating_enabled() -> None
```

##### `reset_retry_interval_in_seconds` <a name="reset_retry_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```python
def reset_retry_interval_in_seconds() -> None
```

##### `reset_sync_interval_in_seconds` <a name="reset_sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```python
def reset_sync_interval_in_seconds() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">garbage_collection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">recreating_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">retry_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">sync_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">garbage_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">recreating_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">retry_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">sync_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `garbage_collection_enabled_input`<sup>Optional</sup> <a name="garbage_collection_enabled_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```python
garbage_collection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `recreating_enabled_input`<sup>Optional</sup> <a name="recreating_enabled_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```python
recreating_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_interval_in_seconds_input`<sup>Optional</sup> <a name="retry_interval_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```python
retry_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_interval_in_seconds_input`<sup>Optional</sup> <a name="sync_interval_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```python
sync_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `garbage_collection_enabled`<sup>Required</sup> <a name="garbage_collection_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```python
garbage_collection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `recreating_enabled`<sup>Required</sup> <a name="recreating_enabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```python
recreating_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_interval_in_seconds`<sup>Required</sup> <a name="retry_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```python
retry_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_interval_in_seconds`<sup>Required</sup> <a name="sync_interval_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```python
sync_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ArcKubernetesFluxConfigurationKustomizations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>]

---


### ArcKubernetesFluxConfigurationTimeoutsOutputReference <a name="ArcKubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import arc_kubernetes_flux_configuration

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ArcKubernetesFluxConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>]

---



