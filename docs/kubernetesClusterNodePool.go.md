# `azurerm_kubernetes_cluster_node_pool`

Refer to the Terraform Registory for docs: [`azurerm_kubernetes_cluster_node_pool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool).

# `kubernetesClusterNodePool` Submodule <a name="`kubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePool(scope Construct, id *string, config KubernetesClusterNodePoolConfig) KubernetesClusterNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig">KubernetesClusterNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig">KubernetesClusterNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig">PutKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig">PutLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile">PutNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings">PutUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile">PutWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId">ResetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCustomCaTrustEnabled">ResetCustomCaTrustEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEnableAutoScaling">ResetEnableAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEnableHostEncryption">ResetEnableHostEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEnableNodePublicIp">ResetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId">ResetHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig">ResetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType">ResetKubeletDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig">ResetLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMessageOfTheDay">ResetMessageOfTheDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels">ResetNodeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile">ResetNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId">ResetNodePublicIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints">ResetNodeTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion">ResetOrchestratorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb">ResetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType">ResetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku">ResetOsSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId">ResetPodSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode">ResetScaleDownMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice">ResetSpotMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled">ResetUltraSsdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings">ResetUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId">ResetVnetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile">ResetWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime">ResetWorkloadRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutKubeletConfig` <a name="PutKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig"></a>

```go
func PutKubeletConfig(value KubernetesClusterNodePoolKubeletConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `PutLinuxOsConfig` <a name="PutLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig"></a>

```go
func PutLinuxOsConfig(value KubernetesClusterNodePoolLinuxOsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `PutNodeNetworkProfile` <a name="PutNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile"></a>

```go
func PutNodeNetworkProfile(value KubernetesClusterNodePoolNodeNetworkProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesClusterNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

---

##### `PutUpgradeSettings` <a name="PutUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings"></a>

```go
func PutUpgradeSettings(value KubernetesClusterNodePoolUpgradeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `PutWindowsProfile` <a name="PutWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile"></a>

```go
func PutWindowsProfile(value KubernetesClusterNodePoolWindowsProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId"></a>

```go
func ResetCapacityReservationGroupId()
```

##### `ResetCustomCaTrustEnabled` <a name="ResetCustomCaTrustEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCustomCaTrustEnabled"></a>

```go
func ResetCustomCaTrustEnabled()
```

##### `ResetEnableAutoScaling` <a name="ResetEnableAutoScaling" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEnableAutoScaling"></a>

```go
func ResetEnableAutoScaling()
```

##### `ResetEnableHostEncryption` <a name="ResetEnableHostEncryption" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEnableHostEncryption"></a>

```go
func ResetEnableHostEncryption()
```

##### `ResetEnableNodePublicIp` <a name="ResetEnableNodePublicIp" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEnableNodePublicIp"></a>

```go
func ResetEnableNodePublicIp()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy"></a>

```go
func ResetEvictionPolicy()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled"></a>

```go
func ResetFipsEnabled()
```

##### `ResetHostGroupId` <a name="ResetHostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId"></a>

```go
func ResetHostGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetKubeletConfig` <a name="ResetKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig"></a>

```go
func ResetKubeletConfig()
```

##### `ResetKubeletDiskType` <a name="ResetKubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType"></a>

```go
func ResetKubeletDiskType()
```

##### `ResetLinuxOsConfig` <a name="ResetLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig"></a>

```go
func ResetLinuxOsConfig()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount"></a>

```go
func ResetMaxCount()
```

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods"></a>

```go
func ResetMaxPods()
```

##### `ResetMessageOfTheDay` <a name="ResetMessageOfTheDay" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMessageOfTheDay"></a>

```go
func ResetMessageOfTheDay()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount"></a>

```go
func ResetMinCount()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetNodeLabels` <a name="ResetNodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels"></a>

```go
func ResetNodeLabels()
```

##### `ResetNodeNetworkProfile` <a name="ResetNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile"></a>

```go
func ResetNodeNetworkProfile()
```

##### `ResetNodePublicIpPrefixId` <a name="ResetNodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId"></a>

```go
func ResetNodePublicIpPrefixId()
```

##### `ResetNodeTaints` <a name="ResetNodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints"></a>

```go
func ResetNodeTaints()
```

##### `ResetOrchestratorVersion` <a name="ResetOrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion"></a>

```go
func ResetOrchestratorVersion()
```

##### `ResetOsDiskSizeGb` <a name="ResetOsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb"></a>

```go
func ResetOsDiskSizeGb()
```

##### `ResetOsDiskType` <a name="ResetOsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType"></a>

```go
func ResetOsDiskType()
```

##### `ResetOsSku` <a name="ResetOsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku"></a>

```go
func ResetOsSku()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetPodSubnetId` <a name="ResetPodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId"></a>

```go
func ResetPodSubnetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId"></a>

```go
func ResetProximityPlacementGroupId()
```

##### `ResetScaleDownMode` <a name="ResetScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode"></a>

```go
func ResetScaleDownMode()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetSpotMaxPrice` <a name="ResetSpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice"></a>

```go
func ResetSpotMaxPrice()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled"></a>

```go
func ResetUltraSsdEnabled()
```

##### `ResetUpgradeSettings` <a name="ResetUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings"></a>

```go
func ResetUpgradeSettings()
```

##### `ResetVnetSubnetId` <a name="ResetVnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId"></a>

```go
func ResetVnetSubnetId()
```

##### `ResetWindowsProfile` <a name="ResetWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile"></a>

```go
func ResetWindowsProfile()
```

##### `ResetWorkloadRuntime` <a name="ResetWorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime"></a>

```go
func ResetWorkloadRuntime()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.KubernetesClusterNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.KubernetesClusterNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.KubernetesClusterNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig">LinuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile">NodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile">WindowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.customCaTrustEnabledInput">CustomCaTrustEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableAutoScalingInput">EnableAutoScalingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableHostEncryptionInput">EnableHostEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableNodePublicIpInput">EnableNodePublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput">HostGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput">KubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput">KubeletDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput">LinuxOsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput">MaxPodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.messageOfTheDayInput">MessageOfTheDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput">MinCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput">NodeLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput">NodeNetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput">NodePublicIpPrefixIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput">NodeTaintsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput">OrchestratorVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput">OsDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput">OsDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput">OsSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput">PodSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput">ScaleDownModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput">SpotMaxPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput">UpgradeSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput">VnetSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput">WindowsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput">WorkloadRuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.customCaTrustEnabled">CustomCaTrustEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableAutoScaling">EnableAutoScaling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableHostEncryption">EnableHostEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled">FipsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId">HostGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType">KubeletDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods">MaxPods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.messageOfTheDay">MessageOfTheDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels">NodeLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId">NodePublicIpPrefixId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints">NodeTaints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion">OrchestratorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku">OsSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId">PodSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode">ScaleDownMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice">SpotMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId">VnetSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime">WorkloadRuntime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubeletConfig`<sup>Required</sup> <a name="KubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig"></a>

```go
func KubeletConfig() KubernetesClusterNodePoolKubeletConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a>

---

##### `LinuxOsConfig`<sup>Required</sup> <a name="LinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig"></a>

```go
func LinuxOsConfig() KubernetesClusterNodePoolLinuxOsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a>

---

##### `NodeNetworkProfile`<sup>Required</sup> <a name="NodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile"></a>

```go
func NodeNetworkProfile() KubernetesClusterNodePoolNodeNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts"></a>

```go
func Timeouts() KubernetesClusterNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `UpgradeSettings`<sup>Required</sup> <a name="UpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings"></a>

```go
func UpgradeSettings() KubernetesClusterNodePoolUpgradeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a>

---

##### `WindowsProfile`<sup>Required</sup> <a name="WindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile"></a>

```go
func WindowsProfile() KubernetesClusterNodePoolWindowsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a>

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput"></a>

```go
func CapacityReservationGroupIdInput() *string
```

- *Type:* *string

---

##### `CustomCaTrustEnabledInput`<sup>Optional</sup> <a name="CustomCaTrustEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.customCaTrustEnabledInput"></a>

```go
func CustomCaTrustEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutoScalingInput`<sup>Optional</sup> <a name="EnableAutoScalingInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableAutoScalingInput"></a>

```go
func EnableAutoScalingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHostEncryptionInput`<sup>Optional</sup> <a name="EnableHostEncryptionInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableHostEncryptionInput"></a>

```go
func EnableHostEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNodePublicIpInput`<sup>Optional</sup> <a name="EnableNodePublicIpInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableNodePublicIpInput"></a>

```go
func EnableNodePublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput"></a>

```go
func EvictionPolicyInput() *string
```

- *Type:* *string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput"></a>

```go
func FipsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostGroupIdInput`<sup>Optional</sup> <a name="HostGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput"></a>

```go
func HostGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubeletConfigInput`<sup>Optional</sup> <a name="KubeletConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput"></a>

```go
func KubeletConfigInput() KubernetesClusterNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `KubeletDiskTypeInput`<sup>Optional</sup> <a name="KubeletDiskTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput"></a>

```go
func KubeletDiskTypeInput() *string
```

- *Type:* *string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput"></a>

```go
func KubernetesClusterIdInput() *string
```

- *Type:* *string

---

##### `LinuxOsConfigInput`<sup>Optional</sup> <a name="LinuxOsConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput"></a>

```go
func LinuxOsConfigInput() KubernetesClusterNodePoolLinuxOsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput"></a>

```go
func MaxPodsInput() *f64
```

- *Type:* *f64

---

##### `MessageOfTheDayInput`<sup>Optional</sup> <a name="MessageOfTheDayInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.messageOfTheDayInput"></a>

```go
func MessageOfTheDayInput() *string
```

- *Type:* *string

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput"></a>

```go
func MinCountInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NodeLabelsInput`<sup>Optional</sup> <a name="NodeLabelsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput"></a>

```go
func NodeLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeNetworkProfileInput`<sup>Optional</sup> <a name="NodeNetworkProfileInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput"></a>

```go
func NodeNetworkProfileInput() KubernetesClusterNodePoolNodeNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `NodePublicIpPrefixIdInput`<sup>Optional</sup> <a name="NodePublicIpPrefixIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput"></a>

```go
func NodePublicIpPrefixIdInput() *string
```

- *Type:* *string

---

##### `NodeTaintsInput`<sup>Optional</sup> <a name="NodeTaintsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput"></a>

```go
func NodeTaintsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrchestratorVersionInput`<sup>Optional</sup> <a name="OrchestratorVersionInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput"></a>

```go
func OrchestratorVersionInput() *string
```

- *Type:* *string

---

##### `OsDiskSizeGbInput`<sup>Optional</sup> <a name="OsDiskSizeGbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput"></a>

```go
func OsDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `OsDiskTypeInput`<sup>Optional</sup> <a name="OsDiskTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput"></a>

```go
func OsDiskTypeInput() *string
```

- *Type:* *string

---

##### `OsSkuInput`<sup>Optional</sup> <a name="OsSkuInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput"></a>

```go
func OsSkuInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `PodSubnetIdInput`<sup>Optional</sup> <a name="PodSubnetIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput"></a>

```go
func PodSubnetIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput"></a>

```go
func ProximityPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `ScaleDownModeInput`<sup>Optional</sup> <a name="ScaleDownModeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput"></a>

```go
func ScaleDownModeInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `SpotMaxPriceInput`<sup>Optional</sup> <a name="SpotMaxPriceInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput"></a>

```go
func SpotMaxPriceInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput"></a>

```go
func UltraSsdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UpgradeSettingsInput`<sup>Optional</sup> <a name="UpgradeSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput"></a>

```go
func UpgradeSettingsInput() KubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `VnetSubnetIdInput`<sup>Optional</sup> <a name="VnetSubnetIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput"></a>

```go
func VnetSubnetIdInput() *string
```

- *Type:* *string

---

##### `WindowsProfileInput`<sup>Optional</sup> <a name="WindowsProfileInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput"></a>

```go
func WindowsProfileInput() KubernetesClusterNodePoolWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `WorkloadRuntimeInput`<sup>Optional</sup> <a name="WorkloadRuntimeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput"></a>

```go
func WorkloadRuntimeInput() *string
```

- *Type:* *string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId"></a>

```go
func CapacityReservationGroupId() *string
```

- *Type:* *string

---

##### `CustomCaTrustEnabled`<sup>Required</sup> <a name="CustomCaTrustEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.customCaTrustEnabled"></a>

```go
func CustomCaTrustEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnableAutoScaling`<sup>Required</sup> <a name="EnableAutoScaling" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableAutoScaling"></a>

```go
func EnableAutoScaling() interface{}
```

- *Type:* interface{}

---

##### `EnableHostEncryption`<sup>Required</sup> <a name="EnableHostEncryption" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableHostEncryption"></a>

```go
func EnableHostEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnableNodePublicIp`<sup>Required</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.enableNodePublicIp"></a>

```go
func EnableNodePublicIp() interface{}
```

- *Type:* interface{}

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled"></a>

```go
func FipsEnabled() interface{}
```

- *Type:* interface{}

---

##### `HostGroupId`<sup>Required</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId"></a>

```go
func HostGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubeletDiskType`<sup>Required</sup> <a name="KubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType"></a>

```go
func KubeletDiskType() *string
```

- *Type:* *string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId"></a>

```go
func KubernetesClusterId() *string
```

- *Type:* *string

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods"></a>

```go
func MaxPods() *f64
```

- *Type:* *f64

---

##### `MessageOfTheDay`<sup>Required</sup> <a name="MessageOfTheDay" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.messageOfTheDay"></a>

```go
func MessageOfTheDay() *string
```

- *Type:* *string

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NodeLabels`<sup>Required</sup> <a name="NodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels"></a>

```go
func NodeLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodePublicIpPrefixId`<sup>Required</sup> <a name="NodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```go
func NodePublicIpPrefixId() *string
```

- *Type:* *string

---

##### `NodeTaints`<sup>Required</sup> <a name="NodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints"></a>

```go
func NodeTaints() *[]*string
```

- *Type:* *[]*string

---

##### `OrchestratorVersion`<sup>Required</sup> <a name="OrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion"></a>

```go
func OrchestratorVersion() *string
```

- *Type:* *string

---

##### `OsDiskSizeGb`<sup>Required</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb"></a>

```go
func OsDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `OsDiskType`<sup>Required</sup> <a name="OsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType"></a>

```go
func OsDiskType() *string
```

- *Type:* *string

---

##### `OsSku`<sup>Required</sup> <a name="OsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku"></a>

```go
func OsSku() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `PodSubnetId`<sup>Required</sup> <a name="PodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId"></a>

```go
func PodSubnetId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `ScaleDownMode`<sup>Required</sup> <a name="ScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode"></a>

```go
func ScaleDownMode() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `SpotMaxPrice`<sup>Required</sup> <a name="SpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice"></a>

```go
func SpotMaxPrice() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled"></a>

```go
func UltraSsdEnabled() interface{}
```

- *Type:* interface{}

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `VnetSubnetId`<sup>Required</sup> <a name="VnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId"></a>

```go
func VnetSubnetId() *string
```

- *Type:* *string

---

##### `WorkloadRuntime`<sup>Required</sup> <a name="WorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime"></a>

```go
func WorkloadRuntime() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterNodePoolConfig <a name="KubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesClusterId: *string,
	Name: *string,
	VmSize: *string,
	CapacityReservationGroupId: *string,
	CustomCaTrustEnabled: interface{},
	EnableAutoScaling: interface{},
	EnableHostEncryption: interface{},
	EnableNodePublicIp: interface{},
	EvictionPolicy: *string,
	FipsEnabled: interface{},
	HostGroupId: *string,
	Id: *string,
	KubeletConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig,
	KubeletDiskType: *string,
	LinuxOsConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig,
	MaxCount: *f64,
	MaxPods: *f64,
	MessageOfTheDay: *string,
	MinCount: *f64,
	Mode: *string,
	NodeCount: *f64,
	NodeLabels: *map[string]*string,
	NodeNetworkProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile,
	NodePublicIpPrefixId: *string,
	NodeTaints: *[]*string,
	OrchestratorVersion: *string,
	OsDiskSizeGb: *f64,
	OsDiskType: *string,
	OsSku: *string,
	OsType: *string,
	PodSubnetId: *string,
	Priority: *string,
	ProximityPlacementGroupId: *string,
	ScaleDownMode: *string,
	SnapshotId: *string,
	SpotMaxPrice: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts,
	UltraSsdEnabled: interface{},
	UpgradeSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings,
	VnetSubnetId: *string,
	WindowsProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile,
	WorkloadRuntime: *string,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.customCaTrustEnabled">CustomCaTrustEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#custom_ca_trust_enabled KubernetesClusterNodePool#custom_ca_trust_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.enableAutoScaling">EnableAutoScaling</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#enable_auto_scaling KubernetesClusterNodePool#enable_auto_scaling}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.enableHostEncryption">EnableHostEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#enable_host_encryption KubernetesClusterNodePool#enable_host_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#enable_node_public_ip KubernetesClusterNodePool#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled">FipsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId">HostGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType">KubeletDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig">LinuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods">MaxPods</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.messageOfTheDay">MessageOfTheDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#message_of_the_day KubernetesClusterNodePool#message_of_the_day}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount">MinCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels">NodeLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile">NodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | node_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId">NodePublicIpPrefixId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints">NodeTaints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion">OrchestratorVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku">OsSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId">PodSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority">Priority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode">ScaleDownMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice">SpotMaxPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId">VnetSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile">WindowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | windows_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime">WorkloadRuntime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId"></a>

```go
KubernetesClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}.

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId"></a>

```go
CapacityReservationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}.

---

##### `CustomCaTrustEnabled`<sup>Optional</sup> <a name="CustomCaTrustEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.customCaTrustEnabled"></a>

```go
CustomCaTrustEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#custom_ca_trust_enabled KubernetesClusterNodePool#custom_ca_trust_enabled}.

---

##### `EnableAutoScaling`<sup>Optional</sup> <a name="EnableAutoScaling" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.enableAutoScaling"></a>

```go
EnableAutoScaling interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#enable_auto_scaling KubernetesClusterNodePool#enable_auto_scaling}.

---

##### `EnableHostEncryption`<sup>Optional</sup> <a name="EnableHostEncryption" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.enableHostEncryption"></a>

```go
EnableHostEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#enable_host_encryption KubernetesClusterNodePool#enable_host_encryption}.

---

##### `EnableNodePublicIp`<sup>Optional</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.enableNodePublicIp"></a>

```go
EnableNodePublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#enable_node_public_ip KubernetesClusterNodePool#enable_node_public_ip}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy"></a>

```go
EvictionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}.

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled"></a>

```go
FipsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}.

---

##### `HostGroupId`<sup>Optional</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId"></a>

```go
HostGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubeletConfig`<sup>Optional</sup> <a name="KubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig"></a>

```go
KubeletConfig KubernetesClusterNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}

---

##### `KubeletDiskType`<sup>Optional</sup> <a name="KubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType"></a>

```go
KubeletDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}.

---

##### `LinuxOsConfig`<sup>Optional</sup> <a name="LinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig"></a>

```go
LinuxOsConfig KubernetesClusterNodePoolLinuxOsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}.

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods"></a>

```go
MaxPods *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}.

---

##### `MessageOfTheDay`<sup>Optional</sup> <a name="MessageOfTheDay" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.messageOfTheDay"></a>

```go
MessageOfTheDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#message_of_the_day KubernetesClusterNodePool#message_of_the_day}.

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount"></a>

```go
MinCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}.

---

##### `NodeLabels`<sup>Optional</sup> <a name="NodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels"></a>

```go
NodeLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}.

---

##### `NodeNetworkProfile`<sup>Optional</sup> <a name="NodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile"></a>

```go
NodeNetworkProfile KubernetesClusterNodePoolNodeNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

node_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}

---

##### `NodePublicIpPrefixId`<sup>Optional</sup> <a name="NodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId"></a>

```go
NodePublicIpPrefixId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}.

---

##### `NodeTaints`<sup>Optional</sup> <a name="NodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints"></a>

```go
NodeTaints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}.

---

##### `OrchestratorVersion`<sup>Optional</sup> <a name="OrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion"></a>

```go
OrchestratorVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}.

---

##### `OsDiskSizeGb`<sup>Optional</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb"></a>

```go
OsDiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}.

---

##### `OsDiskType`<sup>Optional</sup> <a name="OsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType"></a>

```go
OsDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}.

---

##### `OsSku`<sup>Optional</sup> <a name="OsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku"></a>

```go
OsSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}.

---

##### `PodSubnetId`<sup>Optional</sup> <a name="PodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId"></a>

```go
PodSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId"></a>

```go
ProximityPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}.

---

##### `ScaleDownMode`<sup>Optional</sup> <a name="ScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode"></a>

```go
ScaleDownMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}.

---

##### `SpotMaxPrice`<sup>Optional</sup> <a name="SpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice"></a>

```go
SpotMaxPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts"></a>

```go
Timeouts KubernetesClusterNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled"></a>

```go
UltraSsdEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}.

---

##### `UpgradeSettings`<sup>Optional</sup> <a name="UpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings"></a>

```go
UpgradeSettings KubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}

---

##### `VnetSubnetId`<sup>Optional</sup> <a name="VnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId"></a>

```go
VnetSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}.

---

##### `WindowsProfile`<sup>Optional</sup> <a name="WindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile"></a>

```go
WindowsProfile KubernetesClusterNodePoolWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

windows_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}

---

##### `WorkloadRuntime`<sup>Optional</sup> <a name="WorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime"></a>

```go
WorkloadRuntime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}.

---

### KubernetesClusterNodePoolKubeletConfig <a name="KubernetesClusterNodePoolKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolKubeletConfig {
	AllowedUnsafeSysctls: *[]*string,
	ContainerLogMaxLine: *f64,
	ContainerLogMaxSizeMb: *f64,
	CpuCfsQuotaEnabled: interface{},
	CpuCfsQuotaPeriod: *string,
	CpuManagerPolicy: *string,
	ImageGcHighThreshold: *f64,
	ImageGcLowThreshold: *f64,
	PodMaxPid: *f64,
	TopologyManagerPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine">ContainerLogMaxLine</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb">ContainerLogMaxSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled">CpuCfsQuotaEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold">ImageGcHighThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold">ImageGcLowThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid">PodMaxPid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy">TopologyManagerPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}. |

---

##### `AllowedUnsafeSysctls`<sup>Optional</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls"></a>

```go
AllowedUnsafeSysctls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}.

---

##### `ContainerLogMaxLine`<sup>Optional</sup> <a name="ContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine"></a>

```go
ContainerLogMaxLine *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}.

---

##### `ContainerLogMaxSizeMb`<sup>Optional</sup> <a name="ContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb"></a>

```go
ContainerLogMaxSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}.

---

##### `CpuCfsQuotaEnabled`<sup>Optional</sup> <a name="CpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled"></a>

```go
CpuCfsQuotaEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}.

---

##### `CpuCfsQuotaPeriod`<sup>Optional</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```go
CpuCfsQuotaPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}.

---

##### `CpuManagerPolicy`<sup>Optional</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```go
CpuManagerPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}.

---

##### `ImageGcHighThreshold`<sup>Optional</sup> <a name="ImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold"></a>

```go
ImageGcHighThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}.

---

##### `ImageGcLowThreshold`<sup>Optional</sup> <a name="ImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold"></a>

```go
ImageGcLowThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}.

---

##### `PodMaxPid`<sup>Optional</sup> <a name="PodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid"></a>

```go
PodMaxPid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}.

---

##### `TopologyManagerPolicy`<sup>Optional</sup> <a name="TopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy"></a>

```go
TopologyManagerPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}.

---

### KubernetesClusterNodePoolLinuxOsConfig <a name="KubernetesClusterNodePoolLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolLinuxOsConfig {
	SwapFileSizeMb: *f64,
	SysctlConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig,
	TransparentHugePageDefrag: *string,
	TransparentHugePageEnabled: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb">SwapFileSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig">SysctlConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | sysctl_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag">TransparentHugePageDefrag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled">TransparentHugePageEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}. |

---

##### `SwapFileSizeMb`<sup>Optional</sup> <a name="SwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb"></a>

```go
SwapFileSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}.

---

##### `SysctlConfig`<sup>Optional</sup> <a name="SysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig"></a>

```go
SysctlConfig KubernetesClusterNodePoolLinuxOsConfigSysctlConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

sysctl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#sysctl_config KubernetesClusterNodePool#sysctl_config}

---

##### `TransparentHugePageDefrag`<sup>Optional</sup> <a name="TransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag"></a>

```go
TransparentHugePageDefrag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}.

---

##### `TransparentHugePageEnabled`<sup>Optional</sup> <a name="TransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled"></a>

```go
TransparentHugePageEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}.

---

### KubernetesClusterNodePoolLinuxOsConfigSysctlConfig <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig {
	FsAioMaxNr: *f64,
	FsFileMax: *f64,
	FsInotifyMaxUserWatches: *f64,
	FsNrOpen: *f64,
	KernelThreadsMax: *f64,
	NetCoreNetdevMaxBacklog: *f64,
	NetCoreOptmemMax: *f64,
	NetCoreRmemDefault: *f64,
	NetCoreRmemMax: *f64,
	NetCoreSomaxconn: *f64,
	NetCoreWmemDefault: *f64,
	NetCoreWmemMax: *f64,
	NetIpv4IpLocalPortRangeMax: *f64,
	NetIpv4IpLocalPortRangeMin: *f64,
	NetIpv4NeighDefaultGcThresh1: *f64,
	NetIpv4NeighDefaultGcThresh2: *f64,
	NetIpv4NeighDefaultGcThresh3: *f64,
	NetIpv4TcpFinTimeout: *f64,
	NetIpv4TcpKeepaliveIntvl: *f64,
	NetIpv4TcpKeepaliveProbes: *f64,
	NetIpv4TcpKeepaliveTime: *f64,
	NetIpv4TcpMaxSynBacklog: *f64,
	NetIpv4TcpMaxTwBuckets: *f64,
	NetIpv4TcpTwReuse: interface{},
	NetNetfilterNfConntrackBuckets: *f64,
	NetNetfilterNfConntrackMax: *f64,
	VmMaxMapCount: *f64,
	VmSwappiness: *f64,
	VmVfsCachePressure: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr">FsAioMaxNr</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax">FsFileMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches">FsInotifyMaxUserWatches</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen">FsNrOpen</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax">KernelThreadsMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog">NetCoreNetdevMaxBacklog</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax">NetCoreOptmemMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault">NetCoreRmemDefault</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax">NetCoreRmemMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn">NetCoreSomaxconn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault">NetCoreWmemDefault</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax">NetCoreWmemMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax">NetIpv4IpLocalPortRangeMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin">NetIpv4IpLocalPortRangeMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1">NetIpv4NeighDefaultGcThresh1</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2">NetIpv4NeighDefaultGcThresh2</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3">NetIpv4NeighDefaultGcThresh3</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout">NetIpv4TcpFinTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl">NetIpv4TcpKeepaliveIntvl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes">NetIpv4TcpKeepaliveProbes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime">NetIpv4TcpKeepaliveTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog">NetIpv4TcpMaxSynBacklog</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets">NetIpv4TcpMaxTwBuckets</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse">NetIpv4TcpTwReuse</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets">NetNetfilterNfConntrackBuckets</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax">NetNetfilterNfConntrackMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness">VmSwappiness</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure">VmVfsCachePressure</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}. |

---

##### `FsAioMaxNr`<sup>Optional</sup> <a name="FsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr"></a>

```go
FsAioMaxNr *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}.

---

##### `FsFileMax`<sup>Optional</sup> <a name="FsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax"></a>

```go
FsFileMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}.

---

##### `FsInotifyMaxUserWatches`<sup>Optional</sup> <a name="FsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches"></a>

```go
FsInotifyMaxUserWatches *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}.

---

##### `FsNrOpen`<sup>Optional</sup> <a name="FsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen"></a>

```go
FsNrOpen *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}.

---

##### `KernelThreadsMax`<sup>Optional</sup> <a name="KernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax"></a>

```go
KernelThreadsMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}.

---

##### `NetCoreNetdevMaxBacklog`<sup>Optional</sup> <a name="NetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog"></a>

```go
NetCoreNetdevMaxBacklog *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}.

---

##### `NetCoreOptmemMax`<sup>Optional</sup> <a name="NetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax"></a>

```go
NetCoreOptmemMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}.

---

##### `NetCoreRmemDefault`<sup>Optional</sup> <a name="NetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault"></a>

```go
NetCoreRmemDefault *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}.

---

##### `NetCoreRmemMax`<sup>Optional</sup> <a name="NetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax"></a>

```go
NetCoreRmemMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}.

---

##### `NetCoreSomaxconn`<sup>Optional</sup> <a name="NetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn"></a>

```go
NetCoreSomaxconn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}.

---

##### `NetCoreWmemDefault`<sup>Optional</sup> <a name="NetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault"></a>

```go
NetCoreWmemDefault *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}.

---

##### `NetCoreWmemMax`<sup>Optional</sup> <a name="NetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax"></a>

```go
NetCoreWmemMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}.

---

##### `NetIpv4IpLocalPortRangeMax`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax"></a>

```go
NetIpv4IpLocalPortRangeMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}.

---

##### `NetIpv4IpLocalPortRangeMin`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin"></a>

```go
NetIpv4IpLocalPortRangeMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}.

---

##### `NetIpv4NeighDefaultGcThresh1`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1"></a>

```go
NetIpv4NeighDefaultGcThresh1 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}.

---

##### `NetIpv4NeighDefaultGcThresh2`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2"></a>

```go
NetIpv4NeighDefaultGcThresh2 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}.

---

##### `NetIpv4NeighDefaultGcThresh3`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3"></a>

```go
NetIpv4NeighDefaultGcThresh3 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}.

---

##### `NetIpv4TcpFinTimeout`<sup>Optional</sup> <a name="NetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout"></a>

```go
NetIpv4TcpFinTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}.

---

##### `NetIpv4TcpKeepaliveIntvl`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl"></a>

```go
NetIpv4TcpKeepaliveIntvl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}.

---

##### `NetIpv4TcpKeepaliveProbes`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes"></a>

```go
NetIpv4TcpKeepaliveProbes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}.

---

##### `NetIpv4TcpKeepaliveTime`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime"></a>

```go
NetIpv4TcpKeepaliveTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}.

---

##### `NetIpv4TcpMaxSynBacklog`<sup>Optional</sup> <a name="NetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog"></a>

```go
NetIpv4TcpMaxSynBacklog *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}.

---

##### `NetIpv4TcpMaxTwBuckets`<sup>Optional</sup> <a name="NetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets"></a>

```go
NetIpv4TcpMaxTwBuckets *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}.

---

##### `NetIpv4TcpTwReuse`<sup>Optional</sup> <a name="NetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse"></a>

```go
NetIpv4TcpTwReuse interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}.

---

##### `NetNetfilterNfConntrackBuckets`<sup>Optional</sup> <a name="NetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets"></a>

```go
NetNetfilterNfConntrackBuckets *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}.

---

##### `NetNetfilterNfConntrackMax`<sup>Optional</sup> <a name="NetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax"></a>

```go
NetNetfilterNfConntrackMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}.

---

##### `VmMaxMapCount`<sup>Optional</sup> <a name="VmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount"></a>

```go
VmMaxMapCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}.

---

##### `VmSwappiness`<sup>Optional</sup> <a name="VmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness"></a>

```go
VmSwappiness *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}.

---

##### `VmVfsCachePressure`<sup>Optional</sup> <a name="VmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure"></a>

```go
VmVfsCachePressure *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}.

---

### KubernetesClusterNodePoolNodeNetworkProfile <a name="KubernetesClusterNodePoolNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolNodeNetworkProfile {
	NodePublicIpTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags">NodePublicIpTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}. |

---

##### `NodePublicIpTags`<sup>Optional</sup> <a name="NodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags"></a>

```go
NodePublicIpTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}.

---

### KubernetesClusterNodePoolTimeouts <a name="KubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}.

---

### KubernetesClusterNodePoolUpgradeSettings <a name="KubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolUpgradeSettings {
	MaxSurge: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge">MaxSurge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}. |

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge"></a>

```go
MaxSurge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}.

---

### KubernetesClusterNodePoolWindowsProfile <a name="KubernetesClusterNodePoolWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

&kubernetesclusternodepool.KubernetesClusterNodePoolWindowsProfile {
	OutboundNatEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled">OutboundNatEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}. |

---

##### `OutboundNatEnabled`<sup>Optional</sup> <a name="OutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled"></a>

```go
OutboundNatEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterNodePoolKubeletConfigOutputReference <a name="KubernetesClusterNodePoolKubeletConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolKubeletConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolKubeletConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls">ResetAllowedUnsafeSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine">ResetContainerLogMaxLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb">ResetContainerLogMaxSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled">ResetCpuCfsQuotaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">ResetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy">ResetCpuManagerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold">ResetImageGcHighThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold">ResetImageGcLowThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid">ResetPodMaxPid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy">ResetTopologyManagerPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedUnsafeSysctls` <a name="ResetAllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls"></a>

```go
func ResetAllowedUnsafeSysctls()
```

##### `ResetContainerLogMaxLine` <a name="ResetContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine"></a>

```go
func ResetContainerLogMaxLine()
```

##### `ResetContainerLogMaxSizeMb` <a name="ResetContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb"></a>

```go
func ResetContainerLogMaxSizeMb()
```

##### `ResetCpuCfsQuotaEnabled` <a name="ResetCpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled"></a>

```go
func ResetCpuCfsQuotaEnabled()
```

##### `ResetCpuCfsQuotaPeriod` <a name="ResetCpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```go
func ResetCpuCfsQuotaPeriod()
```

##### `ResetCpuManagerPolicy` <a name="ResetCpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```go
func ResetCpuManagerPolicy()
```

##### `ResetImageGcHighThreshold` <a name="ResetImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold"></a>

```go
func ResetImageGcHighThreshold()
```

##### `ResetImageGcLowThreshold` <a name="ResetImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold"></a>

```go
func ResetImageGcLowThreshold()
```

##### `ResetPodMaxPid` <a name="ResetPodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid"></a>

```go
func ResetPodMaxPid()
```

##### `ResetTopologyManagerPolicy` <a name="ResetTopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy"></a>

```go
func ResetTopologyManagerPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput">AllowedUnsafeSysctlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput">ContainerLogMaxLineInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput">ContainerLogMaxSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput">CpuCfsQuotaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">CpuCfsQuotaPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">CpuManagerPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput">ImageGcHighThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput">ImageGcLowThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput">PodMaxPidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput">TopologyManagerPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine">ContainerLogMaxLine</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb">ContainerLogMaxSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled">CpuCfsQuotaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold">ImageGcHighThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold">ImageGcLowThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid">PodMaxPid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy">TopologyManagerPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedUnsafeSysctlsInput`<sup>Optional</sup> <a name="AllowedUnsafeSysctlsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput"></a>

```go
func AllowedUnsafeSysctlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerLogMaxLineInput`<sup>Optional</sup> <a name="ContainerLogMaxLineInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput"></a>

```go
func ContainerLogMaxLineInput() *f64
```

- *Type:* *f64

---

##### `ContainerLogMaxSizeMbInput`<sup>Optional</sup> <a name="ContainerLogMaxSizeMbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput"></a>

```go
func ContainerLogMaxSizeMbInput() *f64
```

- *Type:* *f64

---

##### `CpuCfsQuotaEnabledInput`<sup>Optional</sup> <a name="CpuCfsQuotaEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput"></a>

```go
func CpuCfsQuotaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="CpuCfsQuotaPeriodInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```go
func CpuCfsQuotaPeriodInput() *string
```

- *Type:* *string

---

##### `CpuManagerPolicyInput`<sup>Optional</sup> <a name="CpuManagerPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```go
func CpuManagerPolicyInput() *string
```

- *Type:* *string

---

##### `ImageGcHighThresholdInput`<sup>Optional</sup> <a name="ImageGcHighThresholdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput"></a>

```go
func ImageGcHighThresholdInput() *f64
```

- *Type:* *f64

---

##### `ImageGcLowThresholdInput`<sup>Optional</sup> <a name="ImageGcLowThresholdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput"></a>

```go
func ImageGcLowThresholdInput() *f64
```

- *Type:* *f64

---

##### `PodMaxPidInput`<sup>Optional</sup> <a name="PodMaxPidInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput"></a>

```go
func PodMaxPidInput() *f64
```

- *Type:* *f64

---

##### `TopologyManagerPolicyInput`<sup>Optional</sup> <a name="TopologyManagerPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput"></a>

```go
func TopologyManagerPolicyInput() *string
```

- *Type:* *string

---

##### `AllowedUnsafeSysctls`<sup>Required</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls"></a>

```go
func AllowedUnsafeSysctls() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerLogMaxLine`<sup>Required</sup> <a name="ContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine"></a>

```go
func ContainerLogMaxLine() *f64
```

- *Type:* *f64

---

##### `ContainerLogMaxSizeMb`<sup>Required</sup> <a name="ContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb"></a>

```go
func ContainerLogMaxSizeMb() *f64
```

- *Type:* *f64

---

##### `CpuCfsQuotaEnabled`<sup>Required</sup> <a name="CpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled"></a>

```go
func CpuCfsQuotaEnabled() interface{}
```

- *Type:* interface{}

---

##### `CpuCfsQuotaPeriod`<sup>Required</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```go
func CpuCfsQuotaPeriod() *string
```

- *Type:* *string

---

##### `CpuManagerPolicy`<sup>Required</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```go
func CpuManagerPolicy() *string
```

- *Type:* *string

---

##### `ImageGcHighThreshold`<sup>Required</sup> <a name="ImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold"></a>

```go
func ImageGcHighThreshold() *f64
```

- *Type:* *f64

---

##### `ImageGcLowThreshold`<sup>Required</sup> <a name="ImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold"></a>

```go
func ImageGcLowThreshold() *f64
```

- *Type:* *f64

---

##### `PodMaxPid`<sup>Required</sup> <a name="PodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid"></a>

```go
func PodMaxPid() *f64
```

- *Type:* *f64

---

##### `TopologyManagerPolicy`<sup>Required</sup> <a name="TopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy"></a>

```go
func TopologyManagerPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolLinuxOsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolLinuxOsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig">PutSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb">ResetSwapFileSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig">ResetSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag">ResetTransparentHugePageDefrag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled">ResetTransparentHugePageEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSysctlConfig` <a name="PutSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig"></a>

```go
func PutSysctlConfig(value KubernetesClusterNodePoolLinuxOsConfigSysctlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `ResetSwapFileSizeMb` <a name="ResetSwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb"></a>

```go
func ResetSwapFileSizeMb()
```

##### `ResetSysctlConfig` <a name="ResetSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig"></a>

```go
func ResetSysctlConfig()
```

##### `ResetTransparentHugePageDefrag` <a name="ResetTransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag"></a>

```go
func ResetTransparentHugePageDefrag()
```

##### `ResetTransparentHugePageEnabled` <a name="ResetTransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled"></a>

```go
func ResetTransparentHugePageEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig">SysctlConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput">SwapFileSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput">SysctlConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput">TransparentHugePageDefragInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput">TransparentHugePageEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb">SwapFileSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag">TransparentHugePageDefrag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled">TransparentHugePageEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SysctlConfig`<sup>Required</sup> <a name="SysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig"></a>

```go
func SysctlConfig() KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a>

---

##### `SwapFileSizeMbInput`<sup>Optional</sup> <a name="SwapFileSizeMbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput"></a>

```go
func SwapFileSizeMbInput() *f64
```

- *Type:* *f64

---

##### `SysctlConfigInput`<sup>Optional</sup> <a name="SysctlConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput"></a>

```go
func SysctlConfigInput() KubernetesClusterNodePoolLinuxOsConfigSysctlConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `TransparentHugePageDefragInput`<sup>Optional</sup> <a name="TransparentHugePageDefragInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput"></a>

```go
func TransparentHugePageDefragInput() *string
```

- *Type:* *string

---

##### `TransparentHugePageEnabledInput`<sup>Optional</sup> <a name="TransparentHugePageEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput"></a>

```go
func TransparentHugePageEnabledInput() *string
```

- *Type:* *string

---

##### `SwapFileSizeMb`<sup>Required</sup> <a name="SwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb"></a>

```go
func SwapFileSizeMb() *f64
```

- *Type:* *f64

---

##### `TransparentHugePageDefrag`<sup>Required</sup> <a name="TransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag"></a>

```go
func TransparentHugePageDefrag() *string
```

- *Type:* *string

---

##### `TransparentHugePageEnabled`<sup>Required</sup> <a name="TransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled"></a>

```go
func TransparentHugePageEnabled() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolLinuxOsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr">ResetFsAioMaxNr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax">ResetFsFileMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches">ResetFsInotifyMaxUserWatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen">ResetFsNrOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax">ResetKernelThreadsMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog">ResetNetCoreNetdevMaxBacklog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax">ResetNetCoreOptmemMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault">ResetNetCoreRmemDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax">ResetNetCoreRmemMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn">ResetNetCoreSomaxconn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault">ResetNetCoreWmemDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax">ResetNetCoreWmemMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax">ResetNetIpv4IpLocalPortRangeMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin">ResetNetIpv4IpLocalPortRangeMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1">ResetNetIpv4NeighDefaultGcThresh1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2">ResetNetIpv4NeighDefaultGcThresh2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3">ResetNetIpv4NeighDefaultGcThresh3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout">ResetNetIpv4TcpFinTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl">ResetNetIpv4TcpKeepaliveIntvl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes">ResetNetIpv4TcpKeepaliveProbes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime">ResetNetIpv4TcpKeepaliveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog">ResetNetIpv4TcpMaxSynBacklog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets">ResetNetIpv4TcpMaxTwBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse">ResetNetIpv4TcpTwReuse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets">ResetNetNetfilterNfConntrackBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax">ResetNetNetfilterNfConntrackMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount">ResetVmMaxMapCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness">ResetVmSwappiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure">ResetVmVfsCachePressure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsAioMaxNr` <a name="ResetFsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr"></a>

```go
func ResetFsAioMaxNr()
```

##### `ResetFsFileMax` <a name="ResetFsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax"></a>

```go
func ResetFsFileMax()
```

##### `ResetFsInotifyMaxUserWatches` <a name="ResetFsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches"></a>

```go
func ResetFsInotifyMaxUserWatches()
```

##### `ResetFsNrOpen` <a name="ResetFsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen"></a>

```go
func ResetFsNrOpen()
```

##### `ResetKernelThreadsMax` <a name="ResetKernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax"></a>

```go
func ResetKernelThreadsMax()
```

##### `ResetNetCoreNetdevMaxBacklog` <a name="ResetNetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog"></a>

```go
func ResetNetCoreNetdevMaxBacklog()
```

##### `ResetNetCoreOptmemMax` <a name="ResetNetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax"></a>

```go
func ResetNetCoreOptmemMax()
```

##### `ResetNetCoreRmemDefault` <a name="ResetNetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault"></a>

```go
func ResetNetCoreRmemDefault()
```

##### `ResetNetCoreRmemMax` <a name="ResetNetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax"></a>

```go
func ResetNetCoreRmemMax()
```

##### `ResetNetCoreSomaxconn` <a name="ResetNetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn"></a>

```go
func ResetNetCoreSomaxconn()
```

##### `ResetNetCoreWmemDefault` <a name="ResetNetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault"></a>

```go
func ResetNetCoreWmemDefault()
```

##### `ResetNetCoreWmemMax` <a name="ResetNetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax"></a>

```go
func ResetNetCoreWmemMax()
```

##### `ResetNetIpv4IpLocalPortRangeMax` <a name="ResetNetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax"></a>

```go
func ResetNetIpv4IpLocalPortRangeMax()
```

##### `ResetNetIpv4IpLocalPortRangeMin` <a name="ResetNetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin"></a>

```go
func ResetNetIpv4IpLocalPortRangeMin()
```

##### `ResetNetIpv4NeighDefaultGcThresh1` <a name="ResetNetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1"></a>

```go
func ResetNetIpv4NeighDefaultGcThresh1()
```

##### `ResetNetIpv4NeighDefaultGcThresh2` <a name="ResetNetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2"></a>

```go
func ResetNetIpv4NeighDefaultGcThresh2()
```

##### `ResetNetIpv4NeighDefaultGcThresh3` <a name="ResetNetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3"></a>

```go
func ResetNetIpv4NeighDefaultGcThresh3()
```

##### `ResetNetIpv4TcpFinTimeout` <a name="ResetNetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout"></a>

```go
func ResetNetIpv4TcpFinTimeout()
```

##### `ResetNetIpv4TcpKeepaliveIntvl` <a name="ResetNetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl"></a>

```go
func ResetNetIpv4TcpKeepaliveIntvl()
```

##### `ResetNetIpv4TcpKeepaliveProbes` <a name="ResetNetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes"></a>

```go
func ResetNetIpv4TcpKeepaliveProbes()
```

##### `ResetNetIpv4TcpKeepaliveTime` <a name="ResetNetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime"></a>

```go
func ResetNetIpv4TcpKeepaliveTime()
```

##### `ResetNetIpv4TcpMaxSynBacklog` <a name="ResetNetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog"></a>

```go
func ResetNetIpv4TcpMaxSynBacklog()
```

##### `ResetNetIpv4TcpMaxTwBuckets` <a name="ResetNetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets"></a>

```go
func ResetNetIpv4TcpMaxTwBuckets()
```

##### `ResetNetIpv4TcpTwReuse` <a name="ResetNetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse"></a>

```go
func ResetNetIpv4TcpTwReuse()
```

##### `ResetNetNetfilterNfConntrackBuckets` <a name="ResetNetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets"></a>

```go
func ResetNetNetfilterNfConntrackBuckets()
```

##### `ResetNetNetfilterNfConntrackMax` <a name="ResetNetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax"></a>

```go
func ResetNetNetfilterNfConntrackMax()
```

##### `ResetVmMaxMapCount` <a name="ResetVmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount"></a>

```go
func ResetVmMaxMapCount()
```

##### `ResetVmSwappiness` <a name="ResetVmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness"></a>

```go
func ResetVmSwappiness()
```

##### `ResetVmVfsCachePressure` <a name="ResetVmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure"></a>

```go
func ResetVmVfsCachePressure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput">FsAioMaxNrInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput">FsFileMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput">FsInotifyMaxUserWatchesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput">FsNrOpenInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput">KernelThreadsMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput">NetCoreNetdevMaxBacklogInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput">NetCoreOptmemMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput">NetCoreRmemDefaultInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput">NetCoreRmemMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput">NetCoreSomaxconnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput">NetCoreWmemDefaultInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput">NetCoreWmemMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput">NetIpv4IpLocalPortRangeMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput">NetIpv4IpLocalPortRangeMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input">NetIpv4NeighDefaultGcThresh1Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input">NetIpv4NeighDefaultGcThresh2Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input">NetIpv4NeighDefaultGcThresh3Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput">NetIpv4TcpFinTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput">NetIpv4TcpKeepaliveIntvlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput">NetIpv4TcpKeepaliveProbesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput">NetIpv4TcpKeepaliveTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput">NetIpv4TcpMaxSynBacklogInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput">NetIpv4TcpMaxTwBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput">NetIpv4TcpTwReuseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput">NetNetfilterNfConntrackBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput">NetNetfilterNfConntrackMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput">VmMaxMapCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput">VmSwappinessInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput">VmVfsCachePressureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr">FsAioMaxNr</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax">FsFileMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches">FsInotifyMaxUserWatches</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen">FsNrOpen</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax">KernelThreadsMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog">NetCoreNetdevMaxBacklog</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax">NetCoreOptmemMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault">NetCoreRmemDefault</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax">NetCoreRmemMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn">NetCoreSomaxconn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault">NetCoreWmemDefault</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax">NetCoreWmemMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax">NetIpv4IpLocalPortRangeMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin">NetIpv4IpLocalPortRangeMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1">NetIpv4NeighDefaultGcThresh1</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2">NetIpv4NeighDefaultGcThresh2</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3">NetIpv4NeighDefaultGcThresh3</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout">NetIpv4TcpFinTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl">NetIpv4TcpKeepaliveIntvl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes">NetIpv4TcpKeepaliveProbes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime">NetIpv4TcpKeepaliveTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog">NetIpv4TcpMaxSynBacklog</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets">NetIpv4TcpMaxTwBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse">NetIpv4TcpTwReuse</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets">NetNetfilterNfConntrackBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax">NetNetfilterNfConntrackMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness">VmSwappiness</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure">VmVfsCachePressure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FsAioMaxNrInput`<sup>Optional</sup> <a name="FsAioMaxNrInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput"></a>

```go
func FsAioMaxNrInput() *f64
```

- *Type:* *f64

---

##### `FsFileMaxInput`<sup>Optional</sup> <a name="FsFileMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput"></a>

```go
func FsFileMaxInput() *f64
```

- *Type:* *f64

---

##### `FsInotifyMaxUserWatchesInput`<sup>Optional</sup> <a name="FsInotifyMaxUserWatchesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput"></a>

```go
func FsInotifyMaxUserWatchesInput() *f64
```

- *Type:* *f64

---

##### `FsNrOpenInput`<sup>Optional</sup> <a name="FsNrOpenInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput"></a>

```go
func FsNrOpenInput() *f64
```

- *Type:* *f64

---

##### `KernelThreadsMaxInput`<sup>Optional</sup> <a name="KernelThreadsMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput"></a>

```go
func KernelThreadsMaxInput() *f64
```

- *Type:* *f64

---

##### `NetCoreNetdevMaxBacklogInput`<sup>Optional</sup> <a name="NetCoreNetdevMaxBacklogInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput"></a>

```go
func NetCoreNetdevMaxBacklogInput() *f64
```

- *Type:* *f64

---

##### `NetCoreOptmemMaxInput`<sup>Optional</sup> <a name="NetCoreOptmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput"></a>

```go
func NetCoreOptmemMaxInput() *f64
```

- *Type:* *f64

---

##### `NetCoreRmemDefaultInput`<sup>Optional</sup> <a name="NetCoreRmemDefaultInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput"></a>

```go
func NetCoreRmemDefaultInput() *f64
```

- *Type:* *f64

---

##### `NetCoreRmemMaxInput`<sup>Optional</sup> <a name="NetCoreRmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput"></a>

```go
func NetCoreRmemMaxInput() *f64
```

- *Type:* *f64

---

##### `NetCoreSomaxconnInput`<sup>Optional</sup> <a name="NetCoreSomaxconnInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput"></a>

```go
func NetCoreSomaxconnInput() *f64
```

- *Type:* *f64

---

##### `NetCoreWmemDefaultInput`<sup>Optional</sup> <a name="NetCoreWmemDefaultInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput"></a>

```go
func NetCoreWmemDefaultInput() *f64
```

- *Type:* *f64

---

##### `NetCoreWmemMaxInput`<sup>Optional</sup> <a name="NetCoreWmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput"></a>

```go
func NetCoreWmemMaxInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4IpLocalPortRangeMaxInput`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput"></a>

```go
func NetIpv4IpLocalPortRangeMaxInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4IpLocalPortRangeMinInput`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMinInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput"></a>

```go
func NetIpv4IpLocalPortRangeMinInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4NeighDefaultGcThresh1Input`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh1Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input"></a>

```go
func NetIpv4NeighDefaultGcThresh1Input() *f64
```

- *Type:* *f64

---

##### `NetIpv4NeighDefaultGcThresh2Input`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh2Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input"></a>

```go
func NetIpv4NeighDefaultGcThresh2Input() *f64
```

- *Type:* *f64

---

##### `NetIpv4NeighDefaultGcThresh3Input`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh3Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input"></a>

```go
func NetIpv4NeighDefaultGcThresh3Input() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpFinTimeoutInput`<sup>Optional</sup> <a name="NetIpv4TcpFinTimeoutInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput"></a>

```go
func NetIpv4TcpFinTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpKeepaliveIntvlInput`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveIntvlInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput"></a>

```go
func NetIpv4TcpKeepaliveIntvlInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpKeepaliveProbesInput`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveProbesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput"></a>

```go
func NetIpv4TcpKeepaliveProbesInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpKeepaliveTimeInput`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveTimeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput"></a>

```go
func NetIpv4TcpKeepaliveTimeInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpMaxSynBacklogInput`<sup>Optional</sup> <a name="NetIpv4TcpMaxSynBacklogInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput"></a>

```go
func NetIpv4TcpMaxSynBacklogInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpMaxTwBucketsInput`<sup>Optional</sup> <a name="NetIpv4TcpMaxTwBucketsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput"></a>

```go
func NetIpv4TcpMaxTwBucketsInput() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpTwReuseInput`<sup>Optional</sup> <a name="NetIpv4TcpTwReuseInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput"></a>

```go
func NetIpv4TcpTwReuseInput() interface{}
```

- *Type:* interface{}

---

##### `NetNetfilterNfConntrackBucketsInput`<sup>Optional</sup> <a name="NetNetfilterNfConntrackBucketsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput"></a>

```go
func NetNetfilterNfConntrackBucketsInput() *f64
```

- *Type:* *f64

---

##### `NetNetfilterNfConntrackMaxInput`<sup>Optional</sup> <a name="NetNetfilterNfConntrackMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput"></a>

```go
func NetNetfilterNfConntrackMaxInput() *f64
```

- *Type:* *f64

---

##### `VmMaxMapCountInput`<sup>Optional</sup> <a name="VmMaxMapCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput"></a>

```go
func VmMaxMapCountInput() *f64
```

- *Type:* *f64

---

##### `VmSwappinessInput`<sup>Optional</sup> <a name="VmSwappinessInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput"></a>

```go
func VmSwappinessInput() *f64
```

- *Type:* *f64

---

##### `VmVfsCachePressureInput`<sup>Optional</sup> <a name="VmVfsCachePressureInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput"></a>

```go
func VmVfsCachePressureInput() *f64
```

- *Type:* *f64

---

##### `FsAioMaxNr`<sup>Required</sup> <a name="FsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr"></a>

```go
func FsAioMaxNr() *f64
```

- *Type:* *f64

---

##### `FsFileMax`<sup>Required</sup> <a name="FsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax"></a>

```go
func FsFileMax() *f64
```

- *Type:* *f64

---

##### `FsInotifyMaxUserWatches`<sup>Required</sup> <a name="FsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches"></a>

```go
func FsInotifyMaxUserWatches() *f64
```

- *Type:* *f64

---

##### `FsNrOpen`<sup>Required</sup> <a name="FsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen"></a>

```go
func FsNrOpen() *f64
```

- *Type:* *f64

---

##### `KernelThreadsMax`<sup>Required</sup> <a name="KernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax"></a>

```go
func KernelThreadsMax() *f64
```

- *Type:* *f64

---

##### `NetCoreNetdevMaxBacklog`<sup>Required</sup> <a name="NetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog"></a>

```go
func NetCoreNetdevMaxBacklog() *f64
```

- *Type:* *f64

---

##### `NetCoreOptmemMax`<sup>Required</sup> <a name="NetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax"></a>

```go
func NetCoreOptmemMax() *f64
```

- *Type:* *f64

---

##### `NetCoreRmemDefault`<sup>Required</sup> <a name="NetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault"></a>

```go
func NetCoreRmemDefault() *f64
```

- *Type:* *f64

---

##### `NetCoreRmemMax`<sup>Required</sup> <a name="NetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax"></a>

```go
func NetCoreRmemMax() *f64
```

- *Type:* *f64

---

##### `NetCoreSomaxconn`<sup>Required</sup> <a name="NetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn"></a>

```go
func NetCoreSomaxconn() *f64
```

- *Type:* *f64

---

##### `NetCoreWmemDefault`<sup>Required</sup> <a name="NetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault"></a>

```go
func NetCoreWmemDefault() *f64
```

- *Type:* *f64

---

##### `NetCoreWmemMax`<sup>Required</sup> <a name="NetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax"></a>

```go
func NetCoreWmemMax() *f64
```

- *Type:* *f64

---

##### `NetIpv4IpLocalPortRangeMax`<sup>Required</sup> <a name="NetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax"></a>

```go
func NetIpv4IpLocalPortRangeMax() *f64
```

- *Type:* *f64

---

##### `NetIpv4IpLocalPortRangeMin`<sup>Required</sup> <a name="NetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin"></a>

```go
func NetIpv4IpLocalPortRangeMin() *f64
```

- *Type:* *f64

---

##### `NetIpv4NeighDefaultGcThresh1`<sup>Required</sup> <a name="NetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1"></a>

```go
func NetIpv4NeighDefaultGcThresh1() *f64
```

- *Type:* *f64

---

##### `NetIpv4NeighDefaultGcThresh2`<sup>Required</sup> <a name="NetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2"></a>

```go
func NetIpv4NeighDefaultGcThresh2() *f64
```

- *Type:* *f64

---

##### `NetIpv4NeighDefaultGcThresh3`<sup>Required</sup> <a name="NetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3"></a>

```go
func NetIpv4NeighDefaultGcThresh3() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpFinTimeout`<sup>Required</sup> <a name="NetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout"></a>

```go
func NetIpv4TcpFinTimeout() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpKeepaliveIntvl`<sup>Required</sup> <a name="NetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl"></a>

```go
func NetIpv4TcpKeepaliveIntvl() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpKeepaliveProbes`<sup>Required</sup> <a name="NetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes"></a>

```go
func NetIpv4TcpKeepaliveProbes() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpKeepaliveTime`<sup>Required</sup> <a name="NetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime"></a>

```go
func NetIpv4TcpKeepaliveTime() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpMaxSynBacklog`<sup>Required</sup> <a name="NetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog"></a>

```go
func NetIpv4TcpMaxSynBacklog() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpMaxTwBuckets`<sup>Required</sup> <a name="NetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets"></a>

```go
func NetIpv4TcpMaxTwBuckets() *f64
```

- *Type:* *f64

---

##### `NetIpv4TcpTwReuse`<sup>Required</sup> <a name="NetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse"></a>

```go
func NetIpv4TcpTwReuse() interface{}
```

- *Type:* interface{}

---

##### `NetNetfilterNfConntrackBuckets`<sup>Required</sup> <a name="NetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets"></a>

```go
func NetNetfilterNfConntrackBuckets() *f64
```

- *Type:* *f64

---

##### `NetNetfilterNfConntrackMax`<sup>Required</sup> <a name="NetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax"></a>

```go
func NetNetfilterNfConntrackMax() *f64
```

- *Type:* *f64

---

##### `VmMaxMapCount`<sup>Required</sup> <a name="VmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount"></a>

```go
func VmMaxMapCount() *f64
```

- *Type:* *f64

---

##### `VmSwappiness`<sup>Required</sup> <a name="VmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness"></a>

```go
func VmSwappiness() *f64
```

- *Type:* *f64

---

##### `VmVfsCachePressure`<sup>Required</sup> <a name="VmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure"></a>

```go
func VmVfsCachePressure() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolLinuxOsConfigSysctlConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---


### KubernetesClusterNodePoolNodeNetworkProfileOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolNodeNetworkProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolNodeNetworkProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags">ResetNodePublicIpTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodePublicIpTags` <a name="ResetNodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags"></a>

```go
func ResetNodePublicIpTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput">NodePublicIpTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags">NodePublicIpTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodePublicIpTagsInput`<sup>Optional</sup> <a name="NodePublicIpTagsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput"></a>

```go
func NodePublicIpTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodePublicIpTags`<sup>Required</sup> <a name="NodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags"></a>

```go
func NodePublicIpTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolNodeNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---


### KubernetesClusterNodePoolTimeoutsOutputReference <a name="KubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="KubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolUpgradeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolUpgradeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">MaxSurgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">MaxSurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSurgeInput`<sup>Optional</sup> <a name="MaxSurgeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```go
func MaxSurgeInput() *string
```

- *Type:* *string

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```go
func MaxSurge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---


### KubernetesClusterNodePoolWindowsProfileOutputReference <a name="KubernetesClusterNodePoolWindowsProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/kubernetesclusternodepool"

kubernetesclusternodepool.NewKubernetesClusterNodePoolWindowsProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolWindowsProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled">ResetOutboundNatEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutboundNatEnabled` <a name="ResetOutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled"></a>

```go
func ResetOutboundNatEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput">OutboundNatEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled">OutboundNatEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutboundNatEnabledInput`<sup>Optional</sup> <a name="OutboundNatEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput"></a>

```go
func OutboundNatEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutboundNatEnabled`<sup>Required</sup> <a name="OutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled"></a>

```go
func OutboundNatEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---



