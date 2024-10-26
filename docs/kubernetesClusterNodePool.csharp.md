# `kubernetesClusterNodePool` Submodule <a name="`kubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePool(Construct Scope, string Id, KubernetesClusterNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig">KubernetesClusterNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig">KubernetesClusterNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig">PutKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig">PutLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile">PutNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings">PutUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile">PutWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetAutoScalingEnabled">ResetAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId">ResetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuInstance">ResetGpuInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostEncryptionEnabled">ResetHostEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId">ResetHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig">ResetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType">ResetKubeletDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig">ResetLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels">ResetNodeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile">ResetNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpEnabled">ResetNodePublicIpEnabled</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKubeletConfig` <a name="PutKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig"></a>

```csharp
private void PutKubeletConfig(KubernetesClusterNodePoolKubeletConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `PutLinuxOsConfig` <a name="PutLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig"></a>

```csharp
private void PutLinuxOsConfig(KubernetesClusterNodePoolLinuxOsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putLinuxOsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `PutNodeNetworkProfile` <a name="PutNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile"></a>

```csharp
private void PutNodeNetworkProfile(KubernetesClusterNodePoolNodeNetworkProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putNodeNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(KubernetesClusterNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

---

##### `PutUpgradeSettings` <a name="PutUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings"></a>

```csharp
private void PutUpgradeSettings(KubernetesClusterNodePoolUpgradeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putUpgradeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `PutWindowsProfile` <a name="PutWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile"></a>

```csharp
private void PutWindowsProfile(KubernetesClusterNodePoolWindowsProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.putWindowsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `ResetAutoScalingEnabled` <a name="ResetAutoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetAutoScalingEnabled"></a>

```csharp
private void ResetAutoScalingEnabled()
```

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetCapacityReservationGroupId"></a>

```csharp
private void ResetCapacityReservationGroupId()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetEvictionPolicy"></a>

```csharp
private void ResetEvictionPolicy()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetFipsEnabled"></a>

```csharp
private void ResetFipsEnabled()
```

##### `ResetGpuInstance` <a name="ResetGpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetGpuInstance"></a>

```csharp
private void ResetGpuInstance()
```

##### `ResetHostEncryptionEnabled` <a name="ResetHostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostEncryptionEnabled"></a>

```csharp
private void ResetHostEncryptionEnabled()
```

##### `ResetHostGroupId` <a name="ResetHostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetHostGroupId"></a>

```csharp
private void ResetHostGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKubeletConfig` <a name="ResetKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletConfig"></a>

```csharp
private void ResetKubeletConfig()
```

##### `ResetKubeletDiskType` <a name="ResetKubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetKubeletDiskType"></a>

```csharp
private void ResetKubeletDiskType()
```

##### `ResetLinuxOsConfig` <a name="ResetLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetLinuxOsConfig"></a>

```csharp
private void ResetLinuxOsConfig()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxCount"></a>

```csharp
private void ResetMaxCount()
```

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMaxPods"></a>

```csharp
private void ResetMaxPods()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMinCount"></a>

```csharp
private void ResetMinCount()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetNodeLabels` <a name="ResetNodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeLabels"></a>

```csharp
private void ResetNodeLabels()
```

##### `ResetNodeNetworkProfile` <a name="ResetNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeNetworkProfile"></a>

```csharp
private void ResetNodeNetworkProfile()
```

##### `ResetNodePublicIpEnabled` <a name="ResetNodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpEnabled"></a>

```csharp
private void ResetNodePublicIpEnabled()
```

##### `ResetNodePublicIpPrefixId` <a name="ResetNodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodePublicIpPrefixId"></a>

```csharp
private void ResetNodePublicIpPrefixId()
```

##### `ResetNodeTaints` <a name="ResetNodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetNodeTaints"></a>

```csharp
private void ResetNodeTaints()
```

##### `ResetOrchestratorVersion` <a name="ResetOrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOrchestratorVersion"></a>

```csharp
private void ResetOrchestratorVersion()
```

##### `ResetOsDiskSizeGb` <a name="ResetOsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskSizeGb"></a>

```csharp
private void ResetOsDiskSizeGb()
```

##### `ResetOsDiskType` <a name="ResetOsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsDiskType"></a>

```csharp
private void ResetOsDiskType()
```

##### `ResetOsSku` <a name="ResetOsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsSku"></a>

```csharp
private void ResetOsSku()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetOsType"></a>

```csharp
private void ResetOsType()
```

##### `ResetPodSubnetId` <a name="ResetPodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPodSubnetId"></a>

```csharp
private void ResetPodSubnetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetProximityPlacementGroupId"></a>

```csharp
private void ResetProximityPlacementGroupId()
```

##### `ResetScaleDownMode` <a name="ResetScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetScaleDownMode"></a>

```csharp
private void ResetScaleDownMode()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetSpotMaxPrice` <a name="ResetSpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetSpotMaxPrice"></a>

```csharp
private void ResetSpotMaxPrice()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUltraSsdEnabled"></a>

```csharp
private void ResetUltraSsdEnabled()
```

##### `ResetUpgradeSettings` <a name="ResetUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetUpgradeSettings"></a>

```csharp
private void ResetUpgradeSettings()
```

##### `ResetVnetSubnetId` <a name="ResetVnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetVnetSubnetId"></a>

```csharp
private void ResetVnetSubnetId()
```

##### `ResetWindowsProfile` <a name="ResetWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWindowsProfile"></a>

```csharp
private void ResetWindowsProfile()
```

##### `ResetWorkloadRuntime` <a name="ResetWorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetWorkloadRuntime"></a>

```csharp
private void ResetWorkloadRuntime()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterNodePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KubernetesClusterNodePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesClusterNodePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesClusterNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig">LinuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile">NodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile">WindowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabledInput">AutoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstanceInput">GpuInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabledInput">HostEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput">HostGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput">KubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput">KubeletDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput">LinuxOsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput">MaxCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput">MaxPodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput">MinCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput">NodeLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput">NodeNetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabledInput">NodePublicIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput">NodePublicIpPrefixIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput">NodeTaintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput">OrchestratorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput">OsDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput">OsDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput">OsSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput">PodSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput">ScaleDownModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput">SpotMaxPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput">UpgradeSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput">VnetSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput">WindowsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput">WorkloadRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstance">GpuInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabled">HostEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId">HostGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType">KubeletDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount">MaxCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods">MaxPods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount">MinCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels">NodeLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabled">NodePublicIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId">NodePublicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints">NodeTaints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion">OrchestratorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType">OsDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku">OsSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId">PodSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode">ScaleDownMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice">SpotMaxPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId">VnetSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime">WorkloadRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KubeletConfig`<sup>Required</sup> <a name="KubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfig"></a>

```csharp
public KubernetesClusterNodePoolKubeletConfigOutputReference KubeletConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference">KubernetesClusterNodePoolKubeletConfigOutputReference</a>

---

##### `LinuxOsConfig`<sup>Required</sup> <a name="LinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfig"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfigOutputReference LinuxOsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigOutputReference</a>

---

##### `NodeNetworkProfile`<sup>Required</sup> <a name="NodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfile"></a>

```csharp
public KubernetesClusterNodePoolNodeNetworkProfileOutputReference NodeNetworkProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference">KubernetesClusterNodePoolNodeNetworkProfileOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeouts"></a>

```csharp
public KubernetesClusterNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference">KubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `UpgradeSettings`<sup>Required</sup> <a name="UpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettings"></a>

```csharp
public KubernetesClusterNodePoolUpgradeSettingsOutputReference UpgradeSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference">KubernetesClusterNodePoolUpgradeSettingsOutputReference</a>

---

##### `WindowsProfile`<sup>Required</sup> <a name="WindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfile"></a>

```csharp
public KubernetesClusterNodePoolWindowsProfileOutputReference WindowsProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference">KubernetesClusterNodePoolWindowsProfileOutputReference</a>

---

##### `AutoScalingEnabledInput`<sup>Optional</sup> <a name="AutoScalingEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabledInput"></a>

```csharp
public object AutoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupIdInput"></a>

```csharp
public string CapacityReservationGroupIdInput { get; }
```

- *Type:* string

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicyInput"></a>

```csharp
public string EvictionPolicyInput { get; }
```

- *Type:* string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabledInput"></a>

```csharp
public object FipsEnabledInput { get; }
```

- *Type:* object

---

##### `GpuInstanceInput`<sup>Optional</sup> <a name="GpuInstanceInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstanceInput"></a>

```csharp
public string GpuInstanceInput { get; }
```

- *Type:* string

---

##### `HostEncryptionEnabledInput`<sup>Optional</sup> <a name="HostEncryptionEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabledInput"></a>

```csharp
public object HostEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `HostGroupIdInput`<sup>Optional</sup> <a name="HostGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupIdInput"></a>

```csharp
public string HostGroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubeletConfigInput`<sup>Optional</sup> <a name="KubeletConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletConfigInput"></a>

```csharp
public KubernetesClusterNodePoolKubeletConfig KubeletConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---

##### `KubeletDiskTypeInput`<sup>Optional</sup> <a name="KubeletDiskTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskTypeInput"></a>

```csharp
public string KubeletDiskTypeInput { get; }
```

- *Type:* string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterIdInput"></a>

```csharp
public string KubernetesClusterIdInput { get; }
```

- *Type:* string

---

##### `LinuxOsConfigInput`<sup>Optional</sup> <a name="LinuxOsConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.linuxOsConfigInput"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfig LinuxOsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCountInput"></a>

```csharp
public double MaxCountInput { get; }
```

- *Type:* double

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPodsInput"></a>

```csharp
public double MaxPodsInput { get; }
```

- *Type:* double

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCountInput"></a>

```csharp
public double MinCountInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeLabelsInput`<sup>Optional</sup> <a name="NodeLabelsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeNetworkProfileInput`<sup>Optional</sup> <a name="NodeNetworkProfileInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeNetworkProfileInput"></a>

```csharp
public KubernetesClusterNodePoolNodeNetworkProfile NodeNetworkProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---

##### `NodePublicIpEnabledInput`<sup>Optional</sup> <a name="NodePublicIpEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabledInput"></a>

```csharp
public object NodePublicIpEnabledInput { get; }
```

- *Type:* object

---

##### `NodePublicIpPrefixIdInput`<sup>Optional</sup> <a name="NodePublicIpPrefixIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixIdInput"></a>

```csharp
public string NodePublicIpPrefixIdInput { get; }
```

- *Type:* string

---

##### `NodeTaintsInput`<sup>Optional</sup> <a name="NodeTaintsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaintsInput"></a>

```csharp
public string[] NodeTaintsInput { get; }
```

- *Type:* string[]

---

##### `OrchestratorVersionInput`<sup>Optional</sup> <a name="OrchestratorVersionInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersionInput"></a>

```csharp
public string OrchestratorVersionInput { get; }
```

- *Type:* string

---

##### `OsDiskSizeGbInput`<sup>Optional</sup> <a name="OsDiskSizeGbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGbInput"></a>

```csharp
public double OsDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `OsDiskTypeInput`<sup>Optional</sup> <a name="OsDiskTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskTypeInput"></a>

```csharp
public string OsDiskTypeInput { get; }
```

- *Type:* string

---

##### `OsSkuInput`<sup>Optional</sup> <a name="OsSkuInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSkuInput"></a>

```csharp
public string OsSkuInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `PodSubnetIdInput`<sup>Optional</sup> <a name="PodSubnetIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetIdInput"></a>

```csharp
public string PodSubnetIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupIdInput"></a>

```csharp
public string ProximityPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `ScaleDownModeInput`<sup>Optional</sup> <a name="ScaleDownModeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownModeInput"></a>

```csharp
public string ScaleDownModeInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `SpotMaxPriceInput`<sup>Optional</sup> <a name="SpotMaxPriceInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPriceInput"></a>

```csharp
public double SpotMaxPriceInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabledInput"></a>

```csharp
public object UltraSsdEnabledInput { get; }
```

- *Type:* object

---

##### `UpgradeSettingsInput`<sup>Optional</sup> <a name="UpgradeSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.upgradeSettingsInput"></a>

```csharp
public KubernetesClusterNodePoolUpgradeSettings UpgradeSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `VnetSubnetIdInput`<sup>Optional</sup> <a name="VnetSubnetIdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetIdInput"></a>

```csharp
public string VnetSubnetIdInput { get; }
```

- *Type:* string

---

##### `WindowsProfileInput`<sup>Optional</sup> <a name="WindowsProfileInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.windowsProfileInput"></a>

```csharp
public KubernetesClusterNodePoolWindowsProfile WindowsProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---

##### `WorkloadRuntimeInput`<sup>Optional</sup> <a name="WorkloadRuntimeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntimeInput"></a>

```csharp
public string WorkloadRuntimeInput { get; }
```

- *Type:* string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.autoScalingEnabled"></a>

```csharp
public object AutoScalingEnabled { get; }
```

- *Type:* object

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; }
```

- *Type:* string

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; }
```

- *Type:* object

---

##### `GpuInstance`<sup>Required</sup> <a name="GpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.gpuInstance"></a>

```csharp
public string GpuInstance { get; }
```

- *Type:* string

---

##### `HostEncryptionEnabled`<sup>Required</sup> <a name="HostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostEncryptionEnabled"></a>

```csharp
public object HostEncryptionEnabled { get; }
```

- *Type:* object

---

##### `HostGroupId`<sup>Required</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.hostGroupId"></a>

```csharp
public string HostGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubeletDiskType`<sup>Required</sup> <a name="KubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubeletDiskType"></a>

```csharp
public string KubeletDiskType { get; }
```

- *Type:* string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.kubernetesClusterId"></a>

```csharp
public string KubernetesClusterId { get; }
```

- *Type:* string

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxCount"></a>

```csharp
public double MaxCount { get; }
```

- *Type:* double

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.maxPods"></a>

```csharp
public double MaxPods { get; }
```

- *Type:* double

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.minCount"></a>

```csharp
public double MinCount { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeLabels`<sup>Required</sup> <a name="NodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodePublicIpEnabled`<sup>Required</sup> <a name="NodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpEnabled"></a>

```csharp
public object NodePublicIpEnabled { get; }
```

- *Type:* object

---

##### `NodePublicIpPrefixId`<sup>Required</sup> <a name="NodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```csharp
public string NodePublicIpPrefixId { get; }
```

- *Type:* string

---

##### `NodeTaints`<sup>Required</sup> <a name="NodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.nodeTaints"></a>

```csharp
public string[] NodeTaints { get; }
```

- *Type:* string[]

---

##### `OrchestratorVersion`<sup>Required</sup> <a name="OrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.orchestratorVersion"></a>

```csharp
public string OrchestratorVersion { get; }
```

- *Type:* string

---

##### `OsDiskSizeGb`<sup>Required</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskSizeGb"></a>

```csharp
public double OsDiskSizeGb { get; }
```

- *Type:* double

---

##### `OsDiskType`<sup>Required</sup> <a name="OsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osDiskType"></a>

```csharp
public string OsDiskType { get; }
```

- *Type:* string

---

##### `OsSku`<sup>Required</sup> <a name="OsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osSku"></a>

```csharp
public string OsSku { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `PodSubnetId`<sup>Required</sup> <a name="PodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.podSubnetId"></a>

```csharp
public string PodSubnetId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; }
```

- *Type:* string

---

##### `ScaleDownMode`<sup>Required</sup> <a name="ScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.scaleDownMode"></a>

```csharp
public string ScaleDownMode { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `SpotMaxPrice`<sup>Required</sup> <a name="SpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.spotMaxPrice"></a>

```csharp
public double SpotMaxPrice { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.ultraSsdEnabled"></a>

```csharp
public object UltraSsdEnabled { get; }
```

- *Type:* object

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `VnetSubnetId`<sup>Required</sup> <a name="VnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.vnetSubnetId"></a>

```csharp
public string VnetSubnetId { get; }
```

- *Type:* string

---

##### `WorkloadRuntime`<sup>Required</sup> <a name="WorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.workloadRuntime"></a>

```csharp
public string WorkloadRuntime { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterNodePoolConfig <a name="KubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KubernetesClusterId,
    string Name,
    string VmSize,
    object AutoScalingEnabled = null,
    string CapacityReservationGroupId = null,
    string EvictionPolicy = null,
    object FipsEnabled = null,
    string GpuInstance = null,
    object HostEncryptionEnabled = null,
    string HostGroupId = null,
    string Id = null,
    KubernetesClusterNodePoolKubeletConfig KubeletConfig = null,
    string KubeletDiskType = null,
    KubernetesClusterNodePoolLinuxOsConfig LinuxOsConfig = null,
    double MaxCount = null,
    double MaxPods = null,
    double MinCount = null,
    string Mode = null,
    double NodeCount = null,
    System.Collections.Generic.IDictionary<string, string> NodeLabels = null,
    KubernetesClusterNodePoolNodeNetworkProfile NodeNetworkProfile = null,
    object NodePublicIpEnabled = null,
    string NodePublicIpPrefixId = null,
    string[] NodeTaints = null,
    string OrchestratorVersion = null,
    double OsDiskSizeGb = null,
    string OsDiskType = null,
    string OsSku = null,
    string OsType = null,
    string PodSubnetId = null,
    string Priority = null,
    string ProximityPlacementGroupId = null,
    string ScaleDownMode = null,
    string SnapshotId = null,
    double SpotMaxPrice = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    KubernetesClusterNodePoolTimeouts Timeouts = null,
    object UltraSsdEnabled = null,
    KubernetesClusterNodePoolUpgradeSettings UpgradeSettings = null,
    string VnetSubnetId = null,
    KubernetesClusterNodePoolWindowsProfile WindowsProfile = null,
    string WorkloadRuntime = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuInstance">GpuInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostEncryptionEnabled">HostEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId">HostGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType">KubeletDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig">LinuxOsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount">MaxCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods">MaxPods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount">MinCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels">NodeLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile">NodeNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | node_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpEnabled">NodePublicIpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId">NodePublicIpPrefixId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints">NodeTaints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion">OrchestratorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType">OsDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku">OsSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId">PodSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode">ScaleDownMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice">SpotMaxPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId">VnetSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile">WindowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | windows_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime">WorkloadRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubernetesClusterId"></a>

```csharp
public string KubernetesClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#name KubernetesClusterNodePool#name}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_size KubernetesClusterNodePool#vm_size}.

---

##### `AutoScalingEnabled`<sup>Optional</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.autoScalingEnabled"></a>

```csharp
public object AutoScalingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#auto_scaling_enabled KubernetesClusterNodePool#auto_scaling_enabled}.

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#capacity_reservation_group_id KubernetesClusterNodePool#capacity_reservation_group_id}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#eviction_policy KubernetesClusterNodePool#eviction_policy}.

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fips_enabled KubernetesClusterNodePool#fips_enabled}.

---

##### `GpuInstance`<sup>Optional</sup> <a name="GpuInstance" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.gpuInstance"></a>

```csharp
public string GpuInstance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#gpu_instance KubernetesClusterNodePool#gpu_instance}.

---

##### `HostEncryptionEnabled`<sup>Optional</sup> <a name="HostEncryptionEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostEncryptionEnabled"></a>

```csharp
public object HostEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#host_encryption_enabled KubernetesClusterNodePool#host_encryption_enabled}.

---

##### `HostGroupId`<sup>Optional</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.hostGroupId"></a>

```csharp
public string HostGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#host_group_id KubernetesClusterNodePool#host_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#id KubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubeletConfig`<sup>Optional</sup> <a name="KubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletConfig"></a>

```csharp
public KubernetesClusterNodePoolKubeletConfig KubeletConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kubelet_config KubernetesClusterNodePool#kubelet_config}

---

##### `KubeletDiskType`<sup>Optional</sup> <a name="KubeletDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.kubeletDiskType"></a>

```csharp
public string KubeletDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}.

---

##### `LinuxOsConfig`<sup>Optional</sup> <a name="LinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.linuxOsConfig"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfig LinuxOsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#linux_os_config KubernetesClusterNodePool#linux_os_config}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxCount"></a>

```csharp
public double MaxCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#max_count KubernetesClusterNodePool#max_count}.

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.maxPods"></a>

```csharp
public double MaxPods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#max_pods KubernetesClusterNodePool#max_pods}.

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.minCount"></a>

```csharp
public double MinCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#min_count KubernetesClusterNodePool#min_count}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#mode KubernetesClusterNodePool#mode}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_count KubernetesClusterNodePool#node_count}.

---

##### `NodeLabels`<sup>Optional</sup> <a name="NodeLabels" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_labels KubernetesClusterNodePool#node_labels}.

---

##### `NodeNetworkProfile`<sup>Optional</sup> <a name="NodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeNetworkProfile"></a>

```csharp
public KubernetesClusterNodePoolNodeNetworkProfile NodeNetworkProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

node_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_network_profile KubernetesClusterNodePool#node_network_profile}

---

##### `NodePublicIpEnabled`<sup>Optional</sup> <a name="NodePublicIpEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpEnabled"></a>

```csharp
public object NodePublicIpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_enabled KubernetesClusterNodePool#node_public_ip_enabled}.

---

##### `NodePublicIpPrefixId`<sup>Optional</sup> <a name="NodePublicIpPrefixId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodePublicIpPrefixId"></a>

```csharp
public string NodePublicIpPrefixId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}.

---

##### `NodeTaints`<sup>Optional</sup> <a name="NodeTaints" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.nodeTaints"></a>

```csharp
public string[] NodeTaints { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_taints KubernetesClusterNodePool#node_taints}.

---

##### `OrchestratorVersion`<sup>Optional</sup> <a name="OrchestratorVersion" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.orchestratorVersion"></a>

```csharp
public string OrchestratorVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#orchestrator_version KubernetesClusterNodePool#orchestrator_version}.

---

##### `OsDiskSizeGb`<sup>Optional</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskSizeGb"></a>

```csharp
public double OsDiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}.

---

##### `OsDiskType`<sup>Optional</sup> <a name="OsDiskType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osDiskType"></a>

```csharp
public string OsDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_disk_type KubernetesClusterNodePool#os_disk_type}.

---

##### `OsSku`<sup>Optional</sup> <a name="OsSku" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osSku"></a>

```csharp
public string OsSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_sku KubernetesClusterNodePool#os_sku}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#os_type KubernetesClusterNodePool#os_type}.

---

##### `PodSubnetId`<sup>Optional</sup> <a name="PodSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.podSubnetId"></a>

```csharp
public string PodSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#pod_subnet_id KubernetesClusterNodePool#pod_subnet_id}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#priority KubernetesClusterNodePool#priority}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}.

---

##### `ScaleDownMode`<sup>Optional</sup> <a name="ScaleDownMode" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.scaleDownMode"></a>

```csharp
public string ScaleDownMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#scale_down_mode KubernetesClusterNodePool#scale_down_mode}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#snapshot_id KubernetesClusterNodePool#snapshot_id}.

---

##### `SpotMaxPrice`<sup>Optional</sup> <a name="SpotMaxPrice" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.spotMaxPrice"></a>

```csharp
public double SpotMaxPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#spot_max_price KubernetesClusterNodePool#spot_max_price}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#tags KubernetesClusterNodePool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.timeouts"></a>

```csharp
public KubernetesClusterNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts">KubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#timeouts KubernetesClusterNodePool#timeouts}

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.ultraSsdEnabled"></a>

```csharp
public object UltraSsdEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#ultra_ssd_enabled KubernetesClusterNodePool#ultra_ssd_enabled}.

---

##### `UpgradeSettings`<sup>Optional</sup> <a name="UpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.upgradeSettings"></a>

```csharp
public KubernetesClusterNodePoolUpgradeSettings UpgradeSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#upgrade_settings KubernetesClusterNodePool#upgrade_settings}

---

##### `VnetSubnetId`<sup>Optional</sup> <a name="VnetSubnetId" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.vnetSubnetId"></a>

```csharp
public string VnetSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}.

---

##### `WindowsProfile`<sup>Optional</sup> <a name="WindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.windowsProfile"></a>

```csharp
public KubernetesClusterNodePoolWindowsProfile WindowsProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

windows_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#windows_profile KubernetesClusterNodePool#windows_profile}

---

##### `WorkloadRuntime`<sup>Optional</sup> <a name="WorkloadRuntime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.workloadRuntime"></a>

```csharp
public string WorkloadRuntime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#workload_runtime KubernetesClusterNodePool#workload_runtime}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#zones KubernetesClusterNodePool#zones}.

---

### KubernetesClusterNodePoolKubeletConfig <a name="KubernetesClusterNodePoolKubeletConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolKubeletConfig {
    string[] AllowedUnsafeSysctls = null,
    double ContainerLogMaxLine = null,
    double ContainerLogMaxSizeMb = null,
    object CpuCfsQuotaEnabled = null,
    string CpuCfsQuotaPeriod = null,
    string CpuManagerPolicy = null,
    double ImageGcHighThreshold = null,
    double ImageGcLowThreshold = null,
    double PodMaxPid = null,
    string TopologyManagerPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine">ContainerLogMaxLine</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb">ContainerLogMaxSizeMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled">CpuCfsQuotaEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold">ImageGcHighThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold">ImageGcLowThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid">PodMaxPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy">TopologyManagerPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}. |

---

##### `AllowedUnsafeSysctls`<sup>Optional</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.allowedUnsafeSysctls"></a>

```csharp
public string[] AllowedUnsafeSysctls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}.

---

##### `ContainerLogMaxLine`<sup>Optional</sup> <a name="ContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxLine"></a>

```csharp
public double ContainerLogMaxLine { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_line KubernetesClusterNodePool#container_log_max_line}.

---

##### `ContainerLogMaxSizeMb`<sup>Optional</sup> <a name="ContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.containerLogMaxSizeMb"></a>

```csharp
public double ContainerLogMaxSizeMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}.

---

##### `CpuCfsQuotaEnabled`<sup>Optional</sup> <a name="CpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaEnabled"></a>

```csharp
public object CpuCfsQuotaEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}.

---

##### `CpuCfsQuotaPeriod`<sup>Optional</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```csharp
public string CpuCfsQuotaPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}.

---

##### `CpuManagerPolicy`<sup>Optional</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```csharp
public string CpuManagerPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}.

---

##### `ImageGcHighThreshold`<sup>Optional</sup> <a name="ImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcHighThreshold"></a>

```csharp
public double ImageGcHighThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}.

---

##### `ImageGcLowThreshold`<sup>Optional</sup> <a name="ImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.imageGcLowThreshold"></a>

```csharp
public double ImageGcLowThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}.

---

##### `PodMaxPid`<sup>Optional</sup> <a name="PodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.podMaxPid"></a>

```csharp
public double PodMaxPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#pod_max_pid KubernetesClusterNodePool#pod_max_pid}.

---

##### `TopologyManagerPolicy`<sup>Optional</sup> <a name="TopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig.property.topologyManagerPolicy"></a>

```csharp
public string TopologyManagerPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}.

---

### KubernetesClusterNodePoolLinuxOsConfig <a name="KubernetesClusterNodePoolLinuxOsConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolLinuxOsConfig {
    double SwapFileSizeMb = null,
    KubernetesClusterNodePoolLinuxOsConfigSysctlConfig SysctlConfig = null,
    string TransparentHugePageDefrag = null,
    string TransparentHugePageEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb">SwapFileSizeMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig">SysctlConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | sysctl_config block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag">TransparentHugePageDefrag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled">TransparentHugePageEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}. |

---

##### `SwapFileSizeMb`<sup>Optional</sup> <a name="SwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.swapFileSizeMb"></a>

```csharp
public double SwapFileSizeMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}.

---

##### `SysctlConfig`<sup>Optional</sup> <a name="SysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.sysctlConfig"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfig SysctlConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

sysctl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#sysctl_config KubernetesClusterNodePool#sysctl_config}

---

##### `TransparentHugePageDefrag`<sup>Optional</sup> <a name="TransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageDefrag"></a>

```csharp
public string TransparentHugePageDefrag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}.

---

##### `TransparentHugePageEnabled`<sup>Optional</sup> <a name="TransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig.property.transparentHugePageEnabled"></a>

```csharp
public string TransparentHugePageEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}.

---

### KubernetesClusterNodePoolLinuxOsConfigSysctlConfig <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolLinuxOsConfigSysctlConfig {
    double FsAioMaxNr = null,
    double FsFileMax = null,
    double FsInotifyMaxUserWatches = null,
    double FsNrOpen = null,
    double KernelThreadsMax = null,
    double NetCoreNetdevMaxBacklog = null,
    double NetCoreOptmemMax = null,
    double NetCoreRmemDefault = null,
    double NetCoreRmemMax = null,
    double NetCoreSomaxconn = null,
    double NetCoreWmemDefault = null,
    double NetCoreWmemMax = null,
    double NetIpv4IpLocalPortRangeMax = null,
    double NetIpv4IpLocalPortRangeMin = null,
    double NetIpv4NeighDefaultGcThresh1 = null,
    double NetIpv4NeighDefaultGcThresh2 = null,
    double NetIpv4NeighDefaultGcThresh3 = null,
    double NetIpv4TcpFinTimeout = null,
    double NetIpv4TcpKeepaliveIntvl = null,
    double NetIpv4TcpKeepaliveProbes = null,
    double NetIpv4TcpKeepaliveTime = null,
    double NetIpv4TcpMaxSynBacklog = null,
    double NetIpv4TcpMaxTwBuckets = null,
    object NetIpv4TcpTwReuse = null,
    double NetNetfilterNfConntrackBuckets = null,
    double NetNetfilterNfConntrackMax = null,
    double VmMaxMapCount = null,
    double VmSwappiness = null,
    double VmVfsCachePressure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr">FsAioMaxNr</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax">FsFileMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches">FsInotifyMaxUserWatches</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen">FsNrOpen</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax">KernelThreadsMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog">NetCoreNetdevMaxBacklog</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax">NetCoreOptmemMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault">NetCoreRmemDefault</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax">NetCoreRmemMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn">NetCoreSomaxconn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault">NetCoreWmemDefault</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax">NetCoreWmemMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax">NetIpv4IpLocalPortRangeMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin">NetIpv4IpLocalPortRangeMin</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1">NetIpv4NeighDefaultGcThresh1</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2">NetIpv4NeighDefaultGcThresh2</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3">NetIpv4NeighDefaultGcThresh3</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout">NetIpv4TcpFinTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl">NetIpv4TcpKeepaliveIntvl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes">NetIpv4TcpKeepaliveProbes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime">NetIpv4TcpKeepaliveTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog">NetIpv4TcpMaxSynBacklog</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets">NetIpv4TcpMaxTwBuckets</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse">NetIpv4TcpTwReuse</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets">NetNetfilterNfConntrackBuckets</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax">NetNetfilterNfConntrackMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness">VmSwappiness</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure">VmVfsCachePressure</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}. |

---

##### `FsAioMaxNr`<sup>Optional</sup> <a name="FsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsAioMaxNr"></a>

```csharp
public double FsAioMaxNr { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}.

---

##### `FsFileMax`<sup>Optional</sup> <a name="FsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsFileMax"></a>

```csharp
public double FsFileMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_file_max KubernetesClusterNodePool#fs_file_max}.

---

##### `FsInotifyMaxUserWatches`<sup>Optional</sup> <a name="FsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsInotifyMaxUserWatches"></a>

```csharp
public double FsInotifyMaxUserWatches { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}.

---

##### `FsNrOpen`<sup>Optional</sup> <a name="FsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.fsNrOpen"></a>

```csharp
public double FsNrOpen { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#fs_nr_open KubernetesClusterNodePool#fs_nr_open}.

---

##### `KernelThreadsMax`<sup>Optional</sup> <a name="KernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.kernelThreadsMax"></a>

```csharp
public double KernelThreadsMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}.

---

##### `NetCoreNetdevMaxBacklog`<sup>Optional</sup> <a name="NetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreNetdevMaxBacklog"></a>

```csharp
public double NetCoreNetdevMaxBacklog { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}.

---

##### `NetCoreOptmemMax`<sup>Optional</sup> <a name="NetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreOptmemMax"></a>

```csharp
public double NetCoreOptmemMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}.

---

##### `NetCoreRmemDefault`<sup>Optional</sup> <a name="NetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemDefault"></a>

```csharp
public double NetCoreRmemDefault { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}.

---

##### `NetCoreRmemMax`<sup>Optional</sup> <a name="NetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreRmemMax"></a>

```csharp
public double NetCoreRmemMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}.

---

##### `NetCoreSomaxconn`<sup>Optional</sup> <a name="NetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreSomaxconn"></a>

```csharp
public double NetCoreSomaxconn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}.

---

##### `NetCoreWmemDefault`<sup>Optional</sup> <a name="NetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemDefault"></a>

```csharp
public double NetCoreWmemDefault { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}.

---

##### `NetCoreWmemMax`<sup>Optional</sup> <a name="NetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netCoreWmemMax"></a>

```csharp
public double NetCoreWmemMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}.

---

##### `NetIpv4IpLocalPortRangeMax`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMax"></a>

```csharp
public double NetIpv4IpLocalPortRangeMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}.

---

##### `NetIpv4IpLocalPortRangeMin`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4IpLocalPortRangeMin"></a>

```csharp
public double NetIpv4IpLocalPortRangeMin { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}.

---

##### `NetIpv4NeighDefaultGcThresh1`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh1"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh1 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}.

---

##### `NetIpv4NeighDefaultGcThresh2`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh2"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh2 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}.

---

##### `NetIpv4NeighDefaultGcThresh3`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4NeighDefaultGcThresh3"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh3 { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}.

---

##### `NetIpv4TcpFinTimeout`<sup>Optional</sup> <a name="NetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpFinTimeout"></a>

```csharp
public double NetIpv4TcpFinTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}.

---

##### `NetIpv4TcpKeepaliveIntvl`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveIntvl"></a>

```csharp
public double NetIpv4TcpKeepaliveIntvl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}.

---

##### `NetIpv4TcpKeepaliveProbes`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveProbes"></a>

```csharp
public double NetIpv4TcpKeepaliveProbes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}.

---

##### `NetIpv4TcpKeepaliveTime`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpKeepaliveTime"></a>

```csharp
public double NetIpv4TcpKeepaliveTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}.

---

##### `NetIpv4TcpMaxSynBacklog`<sup>Optional</sup> <a name="NetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxSynBacklog"></a>

```csharp
public double NetIpv4TcpMaxSynBacklog { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}.

---

##### `NetIpv4TcpMaxTwBuckets`<sup>Optional</sup> <a name="NetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpMaxTwBuckets"></a>

```csharp
public double NetIpv4TcpMaxTwBuckets { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}.

---

##### `NetIpv4TcpTwReuse`<sup>Optional</sup> <a name="NetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netIpv4TcpTwReuse"></a>

```csharp
public object NetIpv4TcpTwReuse { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}.

---

##### `NetNetfilterNfConntrackBuckets`<sup>Optional</sup> <a name="NetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackBuckets"></a>

```csharp
public double NetNetfilterNfConntrackBuckets { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}.

---

##### `NetNetfilterNfConntrackMax`<sup>Optional</sup> <a name="NetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.netNetfilterNfConntrackMax"></a>

```csharp
public double NetNetfilterNfConntrackMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}.

---

##### `VmMaxMapCount`<sup>Optional</sup> <a name="VmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmMaxMapCount"></a>

```csharp
public double VmMaxMapCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}.

---

##### `VmSwappiness`<sup>Optional</sup> <a name="VmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmSwappiness"></a>

```csharp
public double VmSwappiness { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_swappiness KubernetesClusterNodePool#vm_swappiness}.

---

##### `VmVfsCachePressure`<sup>Optional</sup> <a name="VmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig.property.vmVfsCachePressure"></a>

```csharp
public double VmVfsCachePressure { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}.

---

### KubernetesClusterNodePoolNodeNetworkProfile <a name="KubernetesClusterNodePoolNodeNetworkProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolNodeNetworkProfile {
    object AllowedHostPorts = null,
    string[] ApplicationSecurityGroupIds = null,
    System.Collections.Generic.IDictionary<string, string> NodePublicIpTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.allowedHostPorts">AllowedHostPorts</a></code> | <code>object</code> | allowed_host_ports block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags">NodePublicIpTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}. |

---

##### `AllowedHostPorts`<sup>Optional</sup> <a name="AllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.allowedHostPorts"></a>

```csharp
public object AllowedHostPorts { get; set; }
```

- *Type:* object

allowed_host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#allowed_host_ports KubernetesClusterNodePool#allowed_host_ports}

---

##### `ApplicationSecurityGroupIds`<sup>Optional</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#application_security_group_ids KubernetesClusterNodePool#application_security_group_ids}.

---

##### `NodePublicIpTags`<sup>Optional</sup> <a name="NodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile.property.nodePublicIpTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodePublicIpTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_public_ip_tags KubernetesClusterNodePool#node_public_ip_tags}.

---

### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts {
    double PortEnd = null,
    double PortStart = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portEnd">PortEnd</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portStart">PortStart</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}. |

---

##### `PortEnd`<sup>Optional</sup> <a name="PortEnd" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portEnd"></a>

```csharp
public double PortEnd { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#port_end KubernetesClusterNodePool#port_end}.

---

##### `PortStart`<sup>Optional</sup> <a name="PortStart" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.portStart"></a>

```csharp
public double PortStart { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#port_start KubernetesClusterNodePool#port_start}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPorts.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#protocol KubernetesClusterNodePool#protocol}.

---

### KubernetesClusterNodePoolTimeouts <a name="KubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#create KubernetesClusterNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#delete KubernetesClusterNodePool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#read KubernetesClusterNodePool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#update KubernetesClusterNodePool#update}.

---

### KubernetesClusterNodePoolUpgradeSettings <a name="KubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolUpgradeSettings {
    string MaxSurge,
    double DrainTimeoutInMinutes = null,
    double NodeSoakDurationInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge">MaxSurge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.drainTimeoutInMinutes">DrainTimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.nodeSoakDurationInMinutes">NodeSoakDurationInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}. |

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.maxSurge"></a>

```csharp
public string MaxSurge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#max_surge KubernetesClusterNodePool#max_surge}.

---

##### `DrainTimeoutInMinutes`<sup>Optional</sup> <a name="DrainTimeoutInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.drainTimeoutInMinutes"></a>

```csharp
public double DrainTimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#drain_timeout_in_minutes KubernetesClusterNodePool#drain_timeout_in_minutes}.

---

##### `NodeSoakDurationInMinutes`<sup>Optional</sup> <a name="NodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings.property.nodeSoakDurationInMinutes"></a>

```csharp
public double NodeSoakDurationInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#node_soak_duration_in_minutes KubernetesClusterNodePool#node_soak_duration_in_minutes}.

---

### KubernetesClusterNodePoolWindowsProfile <a name="KubernetesClusterNodePoolWindowsProfile" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolWindowsProfile {
    object OutboundNatEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled">OutboundNatEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}. |

---

##### `OutboundNatEnabled`<sup>Optional</sup> <a name="OutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile.property.outboundNatEnabled"></a>

```csharp
public object OutboundNatEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/kubernetes_cluster_node_pool#outbound_nat_enabled KubernetesClusterNodePool#outbound_nat_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterNodePoolKubeletConfigOutputReference <a name="KubernetesClusterNodePoolKubeletConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolKubeletConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedUnsafeSysctls` <a name="ResetAllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetAllowedUnsafeSysctls"></a>

```csharp
private void ResetAllowedUnsafeSysctls()
```

##### `ResetContainerLogMaxLine` <a name="ResetContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxLine"></a>

```csharp
private void ResetContainerLogMaxLine()
```

##### `ResetContainerLogMaxSizeMb` <a name="ResetContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetContainerLogMaxSizeMb"></a>

```csharp
private void ResetContainerLogMaxSizeMb()
```

##### `ResetCpuCfsQuotaEnabled` <a name="ResetCpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaEnabled"></a>

```csharp
private void ResetCpuCfsQuotaEnabled()
```

##### `ResetCpuCfsQuotaPeriod` <a name="ResetCpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```csharp
private void ResetCpuCfsQuotaPeriod()
```

##### `ResetCpuManagerPolicy` <a name="ResetCpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```csharp
private void ResetCpuManagerPolicy()
```

##### `ResetImageGcHighThreshold` <a name="ResetImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcHighThreshold"></a>

```csharp
private void ResetImageGcHighThreshold()
```

##### `ResetImageGcLowThreshold` <a name="ResetImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetImageGcLowThreshold"></a>

```csharp
private void ResetImageGcLowThreshold()
```

##### `ResetPodMaxPid` <a name="ResetPodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetPodMaxPid"></a>

```csharp
private void ResetPodMaxPid()
```

##### `ResetTopologyManagerPolicy` <a name="ResetTopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.resetTopologyManagerPolicy"></a>

```csharp
private void ResetTopologyManagerPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput">AllowedUnsafeSysctlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput">ContainerLogMaxLineInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput">ContainerLogMaxSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput">CpuCfsQuotaEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">CpuCfsQuotaPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">CpuManagerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput">ImageGcHighThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput">ImageGcLowThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput">PodMaxPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput">TopologyManagerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine">ContainerLogMaxLine</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb">ContainerLogMaxSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled">CpuCfsQuotaEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold">ImageGcHighThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold">ImageGcLowThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid">PodMaxPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy">TopologyManagerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedUnsafeSysctlsInput`<sup>Optional</sup> <a name="AllowedUnsafeSysctlsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctlsInput"></a>

```csharp
public string[] AllowedUnsafeSysctlsInput { get; }
```

- *Type:* string[]

---

##### `ContainerLogMaxLineInput`<sup>Optional</sup> <a name="ContainerLogMaxLineInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLineInput"></a>

```csharp
public double ContainerLogMaxLineInput { get; }
```

- *Type:* double

---

##### `ContainerLogMaxSizeMbInput`<sup>Optional</sup> <a name="ContainerLogMaxSizeMbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMbInput"></a>

```csharp
public double ContainerLogMaxSizeMbInput { get; }
```

- *Type:* double

---

##### `CpuCfsQuotaEnabledInput`<sup>Optional</sup> <a name="CpuCfsQuotaEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabledInput"></a>

```csharp
public object CpuCfsQuotaEnabledInput { get; }
```

- *Type:* object

---

##### `CpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="CpuCfsQuotaPeriodInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```csharp
public string CpuCfsQuotaPeriodInput { get; }
```

- *Type:* string

---

##### `CpuManagerPolicyInput`<sup>Optional</sup> <a name="CpuManagerPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```csharp
public string CpuManagerPolicyInput { get; }
```

- *Type:* string

---

##### `ImageGcHighThresholdInput`<sup>Optional</sup> <a name="ImageGcHighThresholdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThresholdInput"></a>

```csharp
public double ImageGcHighThresholdInput { get; }
```

- *Type:* double

---

##### `ImageGcLowThresholdInput`<sup>Optional</sup> <a name="ImageGcLowThresholdInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThresholdInput"></a>

```csharp
public double ImageGcLowThresholdInput { get; }
```

- *Type:* double

---

##### `PodMaxPidInput`<sup>Optional</sup> <a name="PodMaxPidInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPidInput"></a>

```csharp
public double PodMaxPidInput { get; }
```

- *Type:* double

---

##### `TopologyManagerPolicyInput`<sup>Optional</sup> <a name="TopologyManagerPolicyInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicyInput"></a>

```csharp
public string TopologyManagerPolicyInput { get; }
```

- *Type:* string

---

##### `AllowedUnsafeSysctls`<sup>Required</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.allowedUnsafeSysctls"></a>

```csharp
public string[] AllowedUnsafeSysctls { get; }
```

- *Type:* string[]

---

##### `ContainerLogMaxLine`<sup>Required</sup> <a name="ContainerLogMaxLine" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxLine"></a>

```csharp
public double ContainerLogMaxLine { get; }
```

- *Type:* double

---

##### `ContainerLogMaxSizeMb`<sup>Required</sup> <a name="ContainerLogMaxSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.containerLogMaxSizeMb"></a>

```csharp
public double ContainerLogMaxSizeMb { get; }
```

- *Type:* double

---

##### `CpuCfsQuotaEnabled`<sup>Required</sup> <a name="CpuCfsQuotaEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaEnabled"></a>

```csharp
public object CpuCfsQuotaEnabled { get; }
```

- *Type:* object

---

##### `CpuCfsQuotaPeriod`<sup>Required</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```csharp
public string CpuCfsQuotaPeriod { get; }
```

- *Type:* string

---

##### `CpuManagerPolicy`<sup>Required</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```csharp
public string CpuManagerPolicy { get; }
```

- *Type:* string

---

##### `ImageGcHighThreshold`<sup>Required</sup> <a name="ImageGcHighThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcHighThreshold"></a>

```csharp
public double ImageGcHighThreshold { get; }
```

- *Type:* double

---

##### `ImageGcLowThreshold`<sup>Required</sup> <a name="ImageGcLowThreshold" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.imageGcLowThreshold"></a>

```csharp
public double ImageGcLowThreshold { get; }
```

- *Type:* double

---

##### `PodMaxPid`<sup>Required</sup> <a name="PodMaxPid" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.podMaxPid"></a>

```csharp
public double PodMaxPid { get; }
```

- *Type:* double

---

##### `TopologyManagerPolicy`<sup>Required</sup> <a name="TopologyManagerPolicy" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.topologyManagerPolicy"></a>

```csharp
public string TopologyManagerPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```csharp
public KubernetesClusterNodePoolKubeletConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolKubeletConfig">KubernetesClusterNodePoolKubeletConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolLinuxOsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSysctlConfig` <a name="PutSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig"></a>

```csharp
private void PutSysctlConfig(KubernetesClusterNodePoolLinuxOsConfigSysctlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.putSysctlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `ResetSwapFileSizeMb` <a name="ResetSwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSwapFileSizeMb"></a>

```csharp
private void ResetSwapFileSizeMb()
```

##### `ResetSysctlConfig` <a name="ResetSysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetSysctlConfig"></a>

```csharp
private void ResetSysctlConfig()
```

##### `ResetTransparentHugePageDefrag` <a name="ResetTransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageDefrag"></a>

```csharp
private void ResetTransparentHugePageDefrag()
```

##### `ResetTransparentHugePageEnabled` <a name="ResetTransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.resetTransparentHugePageEnabled"></a>

```csharp
private void ResetTransparentHugePageEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig">SysctlConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput">SwapFileSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput">SysctlConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput">TransparentHugePageDefragInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput">TransparentHugePageEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb">SwapFileSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag">TransparentHugePageDefrag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled">TransparentHugePageEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SysctlConfig`<sup>Required</sup> <a name="SysctlConfig" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfig"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference SysctlConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference">KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference</a>

---

##### `SwapFileSizeMbInput`<sup>Optional</sup> <a name="SwapFileSizeMbInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMbInput"></a>

```csharp
public double SwapFileSizeMbInput { get; }
```

- *Type:* double

---

##### `SysctlConfigInput`<sup>Optional</sup> <a name="SysctlConfigInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.sysctlConfigInput"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfig SysctlConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---

##### `TransparentHugePageDefragInput`<sup>Optional</sup> <a name="TransparentHugePageDefragInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefragInput"></a>

```csharp
public string TransparentHugePageDefragInput { get; }
```

- *Type:* string

---

##### `TransparentHugePageEnabledInput`<sup>Optional</sup> <a name="TransparentHugePageEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabledInput"></a>

```csharp
public string TransparentHugePageEnabledInput { get; }
```

- *Type:* string

---

##### `SwapFileSizeMb`<sup>Required</sup> <a name="SwapFileSizeMb" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.swapFileSizeMb"></a>

```csharp
public double SwapFileSizeMb { get; }
```

- *Type:* double

---

##### `TransparentHugePageDefrag`<sup>Required</sup> <a name="TransparentHugePageDefrag" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageDefrag"></a>

```csharp
public string TransparentHugePageDefrag { get; }
```

- *Type:* string

---

##### `TransparentHugePageEnabled`<sup>Required</sup> <a name="TransparentHugePageEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.transparentHugePageEnabled"></a>

```csharp
public string TransparentHugePageEnabled { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigOutputReference.property.internalValue"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfig">KubernetesClusterNodePoolLinuxOsConfig</a>

---


### KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference <a name="KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsAioMaxNr` <a name="ResetFsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsAioMaxNr"></a>

```csharp
private void ResetFsAioMaxNr()
```

##### `ResetFsFileMax` <a name="ResetFsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsFileMax"></a>

```csharp
private void ResetFsFileMax()
```

##### `ResetFsInotifyMaxUserWatches` <a name="ResetFsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsInotifyMaxUserWatches"></a>

```csharp
private void ResetFsInotifyMaxUserWatches()
```

##### `ResetFsNrOpen` <a name="ResetFsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetFsNrOpen"></a>

```csharp
private void ResetFsNrOpen()
```

##### `ResetKernelThreadsMax` <a name="ResetKernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetKernelThreadsMax"></a>

```csharp
private void ResetKernelThreadsMax()
```

##### `ResetNetCoreNetdevMaxBacklog` <a name="ResetNetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreNetdevMaxBacklog"></a>

```csharp
private void ResetNetCoreNetdevMaxBacklog()
```

##### `ResetNetCoreOptmemMax` <a name="ResetNetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreOptmemMax"></a>

```csharp
private void ResetNetCoreOptmemMax()
```

##### `ResetNetCoreRmemDefault` <a name="ResetNetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemDefault"></a>

```csharp
private void ResetNetCoreRmemDefault()
```

##### `ResetNetCoreRmemMax` <a name="ResetNetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreRmemMax"></a>

```csharp
private void ResetNetCoreRmemMax()
```

##### `ResetNetCoreSomaxconn` <a name="ResetNetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreSomaxconn"></a>

```csharp
private void ResetNetCoreSomaxconn()
```

##### `ResetNetCoreWmemDefault` <a name="ResetNetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemDefault"></a>

```csharp
private void ResetNetCoreWmemDefault()
```

##### `ResetNetCoreWmemMax` <a name="ResetNetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetCoreWmemMax"></a>

```csharp
private void ResetNetCoreWmemMax()
```

##### `ResetNetIpv4IpLocalPortRangeMax` <a name="ResetNetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMax"></a>

```csharp
private void ResetNetIpv4IpLocalPortRangeMax()
```

##### `ResetNetIpv4IpLocalPortRangeMin` <a name="ResetNetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4IpLocalPortRangeMin"></a>

```csharp
private void ResetNetIpv4IpLocalPortRangeMin()
```

##### `ResetNetIpv4NeighDefaultGcThresh1` <a name="ResetNetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh1"></a>

```csharp
private void ResetNetIpv4NeighDefaultGcThresh1()
```

##### `ResetNetIpv4NeighDefaultGcThresh2` <a name="ResetNetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh2"></a>

```csharp
private void ResetNetIpv4NeighDefaultGcThresh2()
```

##### `ResetNetIpv4NeighDefaultGcThresh3` <a name="ResetNetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4NeighDefaultGcThresh3"></a>

```csharp
private void ResetNetIpv4NeighDefaultGcThresh3()
```

##### `ResetNetIpv4TcpFinTimeout` <a name="ResetNetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpFinTimeout"></a>

```csharp
private void ResetNetIpv4TcpFinTimeout()
```

##### `ResetNetIpv4TcpKeepaliveIntvl` <a name="ResetNetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveIntvl"></a>

```csharp
private void ResetNetIpv4TcpKeepaliveIntvl()
```

##### `ResetNetIpv4TcpKeepaliveProbes` <a name="ResetNetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveProbes"></a>

```csharp
private void ResetNetIpv4TcpKeepaliveProbes()
```

##### `ResetNetIpv4TcpKeepaliveTime` <a name="ResetNetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpKeepaliveTime"></a>

```csharp
private void ResetNetIpv4TcpKeepaliveTime()
```

##### `ResetNetIpv4TcpMaxSynBacklog` <a name="ResetNetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxSynBacklog"></a>

```csharp
private void ResetNetIpv4TcpMaxSynBacklog()
```

##### `ResetNetIpv4TcpMaxTwBuckets` <a name="ResetNetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpMaxTwBuckets"></a>

```csharp
private void ResetNetIpv4TcpMaxTwBuckets()
```

##### `ResetNetIpv4TcpTwReuse` <a name="ResetNetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetIpv4TcpTwReuse"></a>

```csharp
private void ResetNetIpv4TcpTwReuse()
```

##### `ResetNetNetfilterNfConntrackBuckets` <a name="ResetNetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackBuckets"></a>

```csharp
private void ResetNetNetfilterNfConntrackBuckets()
```

##### `ResetNetNetfilterNfConntrackMax` <a name="ResetNetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetNetNetfilterNfConntrackMax"></a>

```csharp
private void ResetNetNetfilterNfConntrackMax()
```

##### `ResetVmMaxMapCount` <a name="ResetVmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmMaxMapCount"></a>

```csharp
private void ResetVmMaxMapCount()
```

##### `ResetVmSwappiness` <a name="ResetVmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmSwappiness"></a>

```csharp
private void ResetVmSwappiness()
```

##### `ResetVmVfsCachePressure` <a name="ResetVmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.resetVmVfsCachePressure"></a>

```csharp
private void ResetVmVfsCachePressure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput">FsAioMaxNrInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput">FsFileMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput">FsInotifyMaxUserWatchesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput">FsNrOpenInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput">KernelThreadsMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput">NetCoreNetdevMaxBacklogInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput">NetCoreOptmemMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput">NetCoreRmemDefaultInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput">NetCoreRmemMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput">NetCoreSomaxconnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput">NetCoreWmemDefaultInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput">NetCoreWmemMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput">NetIpv4IpLocalPortRangeMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput">NetIpv4IpLocalPortRangeMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input">NetIpv4NeighDefaultGcThresh1Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input">NetIpv4NeighDefaultGcThresh2Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input">NetIpv4NeighDefaultGcThresh3Input</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput">NetIpv4TcpFinTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput">NetIpv4TcpKeepaliveIntvlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput">NetIpv4TcpKeepaliveProbesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput">NetIpv4TcpKeepaliveTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput">NetIpv4TcpMaxSynBacklogInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput">NetIpv4TcpMaxTwBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput">NetIpv4TcpTwReuseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput">NetNetfilterNfConntrackBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput">NetNetfilterNfConntrackMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput">VmMaxMapCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput">VmSwappinessInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput">VmVfsCachePressureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr">FsAioMaxNr</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax">FsFileMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches">FsInotifyMaxUserWatches</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen">FsNrOpen</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax">KernelThreadsMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog">NetCoreNetdevMaxBacklog</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax">NetCoreOptmemMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault">NetCoreRmemDefault</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax">NetCoreRmemMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn">NetCoreSomaxconn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault">NetCoreWmemDefault</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax">NetCoreWmemMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax">NetIpv4IpLocalPortRangeMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin">NetIpv4IpLocalPortRangeMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1">NetIpv4NeighDefaultGcThresh1</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2">NetIpv4NeighDefaultGcThresh2</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3">NetIpv4NeighDefaultGcThresh3</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout">NetIpv4TcpFinTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl">NetIpv4TcpKeepaliveIntvl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes">NetIpv4TcpKeepaliveProbes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime">NetIpv4TcpKeepaliveTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog">NetIpv4TcpMaxSynBacklog</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets">NetIpv4TcpMaxTwBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse">NetIpv4TcpTwReuse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets">NetNetfilterNfConntrackBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax">NetNetfilterNfConntrackMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness">VmSwappiness</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure">VmVfsCachePressure</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsAioMaxNrInput`<sup>Optional</sup> <a name="FsAioMaxNrInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNrInput"></a>

```csharp
public double FsAioMaxNrInput { get; }
```

- *Type:* double

---

##### `FsFileMaxInput`<sup>Optional</sup> <a name="FsFileMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMaxInput"></a>

```csharp
public double FsFileMaxInput { get; }
```

- *Type:* double

---

##### `FsInotifyMaxUserWatchesInput`<sup>Optional</sup> <a name="FsInotifyMaxUserWatchesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatchesInput"></a>

```csharp
public double FsInotifyMaxUserWatchesInput { get; }
```

- *Type:* double

---

##### `FsNrOpenInput`<sup>Optional</sup> <a name="FsNrOpenInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpenInput"></a>

```csharp
public double FsNrOpenInput { get; }
```

- *Type:* double

---

##### `KernelThreadsMaxInput`<sup>Optional</sup> <a name="KernelThreadsMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMaxInput"></a>

```csharp
public double KernelThreadsMaxInput { get; }
```

- *Type:* double

---

##### `NetCoreNetdevMaxBacklogInput`<sup>Optional</sup> <a name="NetCoreNetdevMaxBacklogInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklogInput"></a>

```csharp
public double NetCoreNetdevMaxBacklogInput { get; }
```

- *Type:* double

---

##### `NetCoreOptmemMaxInput`<sup>Optional</sup> <a name="NetCoreOptmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMaxInput"></a>

```csharp
public double NetCoreOptmemMaxInput { get; }
```

- *Type:* double

---

##### `NetCoreRmemDefaultInput`<sup>Optional</sup> <a name="NetCoreRmemDefaultInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefaultInput"></a>

```csharp
public double NetCoreRmemDefaultInput { get; }
```

- *Type:* double

---

##### `NetCoreRmemMaxInput`<sup>Optional</sup> <a name="NetCoreRmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMaxInput"></a>

```csharp
public double NetCoreRmemMaxInput { get; }
```

- *Type:* double

---

##### `NetCoreSomaxconnInput`<sup>Optional</sup> <a name="NetCoreSomaxconnInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconnInput"></a>

```csharp
public double NetCoreSomaxconnInput { get; }
```

- *Type:* double

---

##### `NetCoreWmemDefaultInput`<sup>Optional</sup> <a name="NetCoreWmemDefaultInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefaultInput"></a>

```csharp
public double NetCoreWmemDefaultInput { get; }
```

- *Type:* double

---

##### `NetCoreWmemMaxInput`<sup>Optional</sup> <a name="NetCoreWmemMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMaxInput"></a>

```csharp
public double NetCoreWmemMaxInput { get; }
```

- *Type:* double

---

##### `NetIpv4IpLocalPortRangeMaxInput`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMaxInput"></a>

```csharp
public double NetIpv4IpLocalPortRangeMaxInput { get; }
```

- *Type:* double

---

##### `NetIpv4IpLocalPortRangeMinInput`<sup>Optional</sup> <a name="NetIpv4IpLocalPortRangeMinInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMinInput"></a>

```csharp
public double NetIpv4IpLocalPortRangeMinInput { get; }
```

- *Type:* double

---

##### `NetIpv4NeighDefaultGcThresh1Input`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh1Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1Input"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh1Input { get; }
```

- *Type:* double

---

##### `NetIpv4NeighDefaultGcThresh2Input`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh2Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2Input"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh2Input { get; }
```

- *Type:* double

---

##### `NetIpv4NeighDefaultGcThresh3Input`<sup>Optional</sup> <a name="NetIpv4NeighDefaultGcThresh3Input" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3Input"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh3Input { get; }
```

- *Type:* double

---

##### `NetIpv4TcpFinTimeoutInput`<sup>Optional</sup> <a name="NetIpv4TcpFinTimeoutInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeoutInput"></a>

```csharp
public double NetIpv4TcpFinTimeoutInput { get; }
```

- *Type:* double

---

##### `NetIpv4TcpKeepaliveIntvlInput`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveIntvlInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvlInput"></a>

```csharp
public double NetIpv4TcpKeepaliveIntvlInput { get; }
```

- *Type:* double

---

##### `NetIpv4TcpKeepaliveProbesInput`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveProbesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbesInput"></a>

```csharp
public double NetIpv4TcpKeepaliveProbesInput { get; }
```

- *Type:* double

---

##### `NetIpv4TcpKeepaliveTimeInput`<sup>Optional</sup> <a name="NetIpv4TcpKeepaliveTimeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTimeInput"></a>

```csharp
public double NetIpv4TcpKeepaliveTimeInput { get; }
```

- *Type:* double

---

##### `NetIpv4TcpMaxSynBacklogInput`<sup>Optional</sup> <a name="NetIpv4TcpMaxSynBacklogInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklogInput"></a>

```csharp
public double NetIpv4TcpMaxSynBacklogInput { get; }
```

- *Type:* double

---

##### `NetIpv4TcpMaxTwBucketsInput`<sup>Optional</sup> <a name="NetIpv4TcpMaxTwBucketsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBucketsInput"></a>

```csharp
public double NetIpv4TcpMaxTwBucketsInput { get; }
```

- *Type:* double

---

##### `NetIpv4TcpTwReuseInput`<sup>Optional</sup> <a name="NetIpv4TcpTwReuseInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuseInput"></a>

```csharp
public object NetIpv4TcpTwReuseInput { get; }
```

- *Type:* object

---

##### `NetNetfilterNfConntrackBucketsInput`<sup>Optional</sup> <a name="NetNetfilterNfConntrackBucketsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBucketsInput"></a>

```csharp
public double NetNetfilterNfConntrackBucketsInput { get; }
```

- *Type:* double

---

##### `NetNetfilterNfConntrackMaxInput`<sup>Optional</sup> <a name="NetNetfilterNfConntrackMaxInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMaxInput"></a>

```csharp
public double NetNetfilterNfConntrackMaxInput { get; }
```

- *Type:* double

---

##### `VmMaxMapCountInput`<sup>Optional</sup> <a name="VmMaxMapCountInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCountInput"></a>

```csharp
public double VmMaxMapCountInput { get; }
```

- *Type:* double

---

##### `VmSwappinessInput`<sup>Optional</sup> <a name="VmSwappinessInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappinessInput"></a>

```csharp
public double VmSwappinessInput { get; }
```

- *Type:* double

---

##### `VmVfsCachePressureInput`<sup>Optional</sup> <a name="VmVfsCachePressureInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressureInput"></a>

```csharp
public double VmVfsCachePressureInput { get; }
```

- *Type:* double

---

##### `FsAioMaxNr`<sup>Required</sup> <a name="FsAioMaxNr" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsAioMaxNr"></a>

```csharp
public double FsAioMaxNr { get; }
```

- *Type:* double

---

##### `FsFileMax`<sup>Required</sup> <a name="FsFileMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsFileMax"></a>

```csharp
public double FsFileMax { get; }
```

- *Type:* double

---

##### `FsInotifyMaxUserWatches`<sup>Required</sup> <a name="FsInotifyMaxUserWatches" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsInotifyMaxUserWatches"></a>

```csharp
public double FsInotifyMaxUserWatches { get; }
```

- *Type:* double

---

##### `FsNrOpen`<sup>Required</sup> <a name="FsNrOpen" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.fsNrOpen"></a>

```csharp
public double FsNrOpen { get; }
```

- *Type:* double

---

##### `KernelThreadsMax`<sup>Required</sup> <a name="KernelThreadsMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.kernelThreadsMax"></a>

```csharp
public double KernelThreadsMax { get; }
```

- *Type:* double

---

##### `NetCoreNetdevMaxBacklog`<sup>Required</sup> <a name="NetCoreNetdevMaxBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreNetdevMaxBacklog"></a>

```csharp
public double NetCoreNetdevMaxBacklog { get; }
```

- *Type:* double

---

##### `NetCoreOptmemMax`<sup>Required</sup> <a name="NetCoreOptmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreOptmemMax"></a>

```csharp
public double NetCoreOptmemMax { get; }
```

- *Type:* double

---

##### `NetCoreRmemDefault`<sup>Required</sup> <a name="NetCoreRmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemDefault"></a>

```csharp
public double NetCoreRmemDefault { get; }
```

- *Type:* double

---

##### `NetCoreRmemMax`<sup>Required</sup> <a name="NetCoreRmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreRmemMax"></a>

```csharp
public double NetCoreRmemMax { get; }
```

- *Type:* double

---

##### `NetCoreSomaxconn`<sup>Required</sup> <a name="NetCoreSomaxconn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreSomaxconn"></a>

```csharp
public double NetCoreSomaxconn { get; }
```

- *Type:* double

---

##### `NetCoreWmemDefault`<sup>Required</sup> <a name="NetCoreWmemDefault" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemDefault"></a>

```csharp
public double NetCoreWmemDefault { get; }
```

- *Type:* double

---

##### `NetCoreWmemMax`<sup>Required</sup> <a name="NetCoreWmemMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netCoreWmemMax"></a>

```csharp
public double NetCoreWmemMax { get; }
```

- *Type:* double

---

##### `NetIpv4IpLocalPortRangeMax`<sup>Required</sup> <a name="NetIpv4IpLocalPortRangeMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMax"></a>

```csharp
public double NetIpv4IpLocalPortRangeMax { get; }
```

- *Type:* double

---

##### `NetIpv4IpLocalPortRangeMin`<sup>Required</sup> <a name="NetIpv4IpLocalPortRangeMin" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4IpLocalPortRangeMin"></a>

```csharp
public double NetIpv4IpLocalPortRangeMin { get; }
```

- *Type:* double

---

##### `NetIpv4NeighDefaultGcThresh1`<sup>Required</sup> <a name="NetIpv4NeighDefaultGcThresh1" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh1"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh1 { get; }
```

- *Type:* double

---

##### `NetIpv4NeighDefaultGcThresh2`<sup>Required</sup> <a name="NetIpv4NeighDefaultGcThresh2" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh2"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh2 { get; }
```

- *Type:* double

---

##### `NetIpv4NeighDefaultGcThresh3`<sup>Required</sup> <a name="NetIpv4NeighDefaultGcThresh3" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4NeighDefaultGcThresh3"></a>

```csharp
public double NetIpv4NeighDefaultGcThresh3 { get; }
```

- *Type:* double

---

##### `NetIpv4TcpFinTimeout`<sup>Required</sup> <a name="NetIpv4TcpFinTimeout" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpFinTimeout"></a>

```csharp
public double NetIpv4TcpFinTimeout { get; }
```

- *Type:* double

---

##### `NetIpv4TcpKeepaliveIntvl`<sup>Required</sup> <a name="NetIpv4TcpKeepaliveIntvl" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveIntvl"></a>

```csharp
public double NetIpv4TcpKeepaliveIntvl { get; }
```

- *Type:* double

---

##### `NetIpv4TcpKeepaliveProbes`<sup>Required</sup> <a name="NetIpv4TcpKeepaliveProbes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveProbes"></a>

```csharp
public double NetIpv4TcpKeepaliveProbes { get; }
```

- *Type:* double

---

##### `NetIpv4TcpKeepaliveTime`<sup>Required</sup> <a name="NetIpv4TcpKeepaliveTime" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpKeepaliveTime"></a>

```csharp
public double NetIpv4TcpKeepaliveTime { get; }
```

- *Type:* double

---

##### `NetIpv4TcpMaxSynBacklog`<sup>Required</sup> <a name="NetIpv4TcpMaxSynBacklog" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxSynBacklog"></a>

```csharp
public double NetIpv4TcpMaxSynBacklog { get; }
```

- *Type:* double

---

##### `NetIpv4TcpMaxTwBuckets`<sup>Required</sup> <a name="NetIpv4TcpMaxTwBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpMaxTwBuckets"></a>

```csharp
public double NetIpv4TcpMaxTwBuckets { get; }
```

- *Type:* double

---

##### `NetIpv4TcpTwReuse`<sup>Required</sup> <a name="NetIpv4TcpTwReuse" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netIpv4TcpTwReuse"></a>

```csharp
public object NetIpv4TcpTwReuse { get; }
```

- *Type:* object

---

##### `NetNetfilterNfConntrackBuckets`<sup>Required</sup> <a name="NetNetfilterNfConntrackBuckets" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackBuckets"></a>

```csharp
public double NetNetfilterNfConntrackBuckets { get; }
```

- *Type:* double

---

##### `NetNetfilterNfConntrackMax`<sup>Required</sup> <a name="NetNetfilterNfConntrackMax" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.netNetfilterNfConntrackMax"></a>

```csharp
public double NetNetfilterNfConntrackMax { get; }
```

- *Type:* double

---

##### `VmMaxMapCount`<sup>Required</sup> <a name="VmMaxMapCount" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmMaxMapCount"></a>

```csharp
public double VmMaxMapCount { get; }
```

- *Type:* double

---

##### `VmSwappiness`<sup>Required</sup> <a name="VmSwappiness" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmSwappiness"></a>

```csharp
public double VmSwappiness { get; }
```

- *Type:* double

---

##### `VmVfsCachePressure`<sup>Required</sup> <a name="VmVfsCachePressure" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.vmVfsCachePressure"></a>

```csharp
public double VmVfsCachePressure { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfigOutputReference.property.internalValue"></a>

```csharp
public KubernetesClusterNodePoolLinuxOsConfigSysctlConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolLinuxOsConfigSysctlConfig">KubernetesClusterNodePoolLinuxOsConfigSysctlConfig</a>

---


### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get"></a>

```csharp
private KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortEnd">ResetPortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortStart">ResetPortStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortEnd` <a name="ResetPortEnd" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortEnd"></a>

```csharp
private void ResetPortEnd()
```

##### `ResetPortStart` <a name="ResetPortStart" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetPortStart"></a>

```csharp
private void ResetPortStart()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEndInput">PortEndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStartInput">PortStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEnd">PortEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStart">PortStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortEndInput`<sup>Optional</sup> <a name="PortEndInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEndInput"></a>

```csharp
public double PortEndInput { get; }
```

- *Type:* double

---

##### `PortStartInput`<sup>Optional</sup> <a name="PortStartInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStartInput"></a>

```csharp
public double PortStartInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `PortEnd`<sup>Required</sup> <a name="PortEnd" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portEnd"></a>

```csharp
public double PortEnd { get; }
```

- *Type:* double

---

##### `PortStart`<sup>Required</sup> <a name="PortStart" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.portStart"></a>

```csharp
public double PortStart { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesClusterNodePoolNodeNetworkProfileOutputReference <a name="KubernetesClusterNodePoolNodeNetworkProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolNodeNetworkProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts">PutAllowedHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetAllowedHostPorts">ResetAllowedHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetApplicationSecurityGroupIds">ResetApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags">ResetNodePublicIpTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedHostPorts` <a name="PutAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts"></a>

```csharp
private void PutAllowedHostPorts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.putAllowedHostPorts.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedHostPorts` <a name="ResetAllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetAllowedHostPorts"></a>

```csharp
private void ResetAllowedHostPorts()
```

##### `ResetApplicationSecurityGroupIds` <a name="ResetApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetApplicationSecurityGroupIds"></a>

```csharp
private void ResetApplicationSecurityGroupIds()
```

##### `ResetNodePublicIpTags` <a name="ResetNodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.resetNodePublicIpTags"></a>

```csharp
private void ResetNodePublicIpTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPorts">AllowedHostPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPortsInput">AllowedHostPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIdsInput">ApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput">NodePublicIpTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags">NodePublicIpTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHostPorts`<sup>Required</sup> <a name="AllowedHostPorts" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPorts"></a>

```csharp
public KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList AllowedHostPorts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList">KubernetesClusterNodePoolNodeNetworkProfileAllowedHostPortsList</a>

---

##### `AllowedHostPortsInput`<sup>Optional</sup> <a name="AllowedHostPortsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.allowedHostPortsInput"></a>

```csharp
public object AllowedHostPortsInput { get; }
```

- *Type:* object

---

##### `ApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIdsInput"></a>

```csharp
public string[] ApplicationSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `NodePublicIpTagsInput`<sup>Optional</sup> <a name="NodePublicIpTagsInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodePublicIpTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `NodePublicIpTags`<sup>Required</sup> <a name="NodePublicIpTags" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.nodePublicIpTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodePublicIpTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfileOutputReference.property.internalValue"></a>

```csharp
public KubernetesClusterNodePoolNodeNetworkProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolNodeNetworkProfile">KubernetesClusterNodePoolNodeNetworkProfile</a>

---


### KubernetesClusterNodePoolTimeoutsOutputReference <a name="KubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="KubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolUpgradeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetDrainTimeoutInMinutes">ResetDrainTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetNodeSoakDurationInMinutes">ResetNodeSoakDurationInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainTimeoutInMinutes` <a name="ResetDrainTimeoutInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetDrainTimeoutInMinutes"></a>

```csharp
private void ResetDrainTimeoutInMinutes()
```

##### `ResetNodeSoakDurationInMinutes` <a name="ResetNodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.resetNodeSoakDurationInMinutes"></a>

```csharp
private void ResetNodeSoakDurationInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutesInput">DrainTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">MaxSurgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutesInput">NodeSoakDurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes">DrainTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">MaxSurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes">NodeSoakDurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DrainTimeoutInMinutesInput`<sup>Optional</sup> <a name="DrainTimeoutInMinutesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutesInput"></a>

```csharp
public double DrainTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `MaxSurgeInput`<sup>Optional</sup> <a name="MaxSurgeInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```csharp
public string MaxSurgeInput { get; }
```

- *Type:* string

---

##### `NodeSoakDurationInMinutesInput`<sup>Optional</sup> <a name="NodeSoakDurationInMinutesInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutesInput"></a>

```csharp
public double NodeSoakDurationInMinutesInput { get; }
```

- *Type:* double

---

##### `DrainTimeoutInMinutes`<sup>Required</sup> <a name="DrainTimeoutInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes"></a>

```csharp
public double DrainTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```csharp
public string MaxSurge { get; }
```

- *Type:* string

---

##### `NodeSoakDurationInMinutes`<sup>Required</sup> <a name="NodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes"></a>

```csharp
public double NodeSoakDurationInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```csharp
public KubernetesClusterNodePoolUpgradeSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolUpgradeSettings">KubernetesClusterNodePoolUpgradeSettings</a>

---


### KubernetesClusterNodePoolWindowsProfileOutputReference <a name="KubernetesClusterNodePoolWindowsProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterNodePoolWindowsProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutboundNatEnabled` <a name="ResetOutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.resetOutboundNatEnabled"></a>

```csharp
private void ResetOutboundNatEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput">OutboundNatEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled">OutboundNatEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutboundNatEnabledInput`<sup>Optional</sup> <a name="OutboundNatEnabledInput" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabledInput"></a>

```csharp
public object OutboundNatEnabledInput { get; }
```

- *Type:* object

---

##### `OutboundNatEnabled`<sup>Required</sup> <a name="OutboundNatEnabled" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.outboundNatEnabled"></a>

```csharp
public object OutboundNatEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfileOutputReference.property.internalValue"></a>

```csharp
public KubernetesClusterNodePoolWindowsProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterNodePool.KubernetesClusterNodePoolWindowsProfile">KubernetesClusterNodePoolWindowsProfile</a>

---



