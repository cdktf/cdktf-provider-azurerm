# `arcKubernetesFluxConfiguration` Submodule <a name="`arcKubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesFluxConfiguration <a name="ArcKubernetesFluxConfiguration" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration azurerm_arc_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfiguration(Construct Scope, string Id, ArcKubernetesFluxConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig">ArcKubernetesFluxConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig">ArcKubernetesFluxConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage">PutBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket">PutBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository">PutGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations">PutKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage">ResetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled">ResetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository">ResetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlobStorage` <a name="PutBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage"></a>

```csharp
private void PutBlobStorage(ArcKubernetesFluxConfigurationBlobStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `PutBucket` <a name="PutBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket"></a>

```csharp
private void PutBucket(ArcKubernetesFluxConfigurationBucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `PutGitRepository` <a name="PutGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository"></a>

```csharp
private void PutGitRepository(ArcKubernetesFluxConfigurationGitRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `PutKustomizations` <a name="PutKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations"></a>

```csharp
private void PutKustomizations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(ArcKubernetesFluxConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---

##### `ResetBlobStorage` <a name="ResetBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage"></a>

```csharp
private void ResetBlobStorage()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetContinuousReconciliationEnabled` <a name="ResetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```csharp
private void ResetContinuousReconciliationEnabled()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository"></a>

```csharp
private void ResetGitRepository()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesFluxConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesFluxConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesFluxConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesFluxConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcKubernetesFluxConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcKubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage">BlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations">Kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput">BlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput">BucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">ContinuousReconciliationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput">KustomizationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled">ContinuousReconciliationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BlobStorage`<sup>Required</sup> <a name="BlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorageOutputReference BlobStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket"></a>

```csharp
public ArcKubernetesFluxConfigurationBucketOutputReference Bucket { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a>

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository"></a>

```csharp
public ArcKubernetesFluxConfigurationGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `Kustomizations`<sup>Required</sup> <a name="Kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations"></a>

```csharp
public ArcKubernetesFluxConfigurationKustomizationsList Kustomizations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts"></a>

```csharp
public ArcKubernetesFluxConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `BlobStorageInput`<sup>Optional</sup> <a name="BlobStorageInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorage BlobStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput"></a>

```csharp
public ArcKubernetesFluxConfigurationBucket BucketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ContinuousReconciliationEnabledInput`<sup>Optional</sup> <a name="ContinuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```csharp
public object ContinuousReconciliationEnabledInput { get; }
```

- *Type:* object

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```csharp
public ArcKubernetesFluxConfigurationGitRepository GitRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KustomizationsInput`<sup>Optional</sup> <a name="KustomizationsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput"></a>

```csharp
public object KustomizationsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ContinuousReconciliationEnabled`<sup>Required</sup> <a name="ContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```csharp
public object ContinuousReconciliationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesFluxConfigurationBlobStorage <a name="ArcKubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationBlobStorage {
    string ContainerId,
    string AccountKey = null,
    string LocalAuthReference = null,
    string SasToken = null,
    ArcKubernetesFluxConfigurationBlobStorageServicePrincipal ServicePrincipal = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId">ContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken">SasToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```csharp
public string ContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `SasToken`<sup>Optional</sup> <a name="SasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```csharp
public string SasToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}.

---

##### `ServicePrincipal`<sup>Optional</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipal ServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#service_principal ArcKubernetesFluxConfiguration#service_principal}

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationBlobStorageServicePrincipal <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationBlobStorageServicePrincipal {
    string ClientId,
    string TenantId,
    string ClientCertificateBase64 = null,
    string ClientCertificatePassword = null,
    object ClientCertificateSendChain = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">ClientCertificateBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">ClientCertificateSendChain</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}.

---

##### `ClientCertificateBase64`<sup>Optional</sup> <a name="ClientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```csharp
public string ClientCertificateBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}.

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}.

---

##### `ClientCertificateSendChain`<sup>Optional</sup> <a name="ClientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```csharp
public object ClientCertificateSendChain { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}.

---

### ArcKubernetesFluxConfigurationBucket <a name="ArcKubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationBucket {
    string BucketName,
    string Url,
    string AccessKey = null,
    string LocalAuthReference = null,
    string SecretKeyBase64 = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null,
    object TlsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey">AccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64">SecretKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled">TlsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `SecretKeyBase64`<sup>Optional</sup> <a name="SecretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```csharp
public string SecretKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```csharp
public object TlsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}.

---

### ArcKubernetesFluxConfigurationConfig <a name="ArcKubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object Kustomizations,
    string Name,
    string Namespace,
    ArcKubernetesFluxConfigurationBlobStorage BlobStorage = null,
    ArcKubernetesFluxConfigurationBucket Bucket = null,
    object ContinuousReconciliationEnabled = null,
    ArcKubernetesFluxConfigurationGitRepository GitRepository = null,
    string Id = null,
    string Scope = null,
    ArcKubernetesFluxConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations">Kustomizations</a></code> | <code>object</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage">BlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">ContinuousReconciliationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}.

---

##### `Kustomizations`<sup>Required</sup> <a name="Kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations"></a>

```csharp
public object Kustomizations { get; set; }
```

- *Type:* object

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#kustomizations ArcKubernetesFluxConfiguration#kustomizations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}.

---

##### `BlobStorage`<sup>Optional</sup> <a name="BlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorage BlobStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#blob_storage ArcKubernetesFluxConfiguration#blob_storage}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket"></a>

```csharp
public ArcKubernetesFluxConfigurationBucket Bucket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#bucket ArcKubernetesFluxConfiguration#bucket}

---

##### `ContinuousReconciliationEnabled`<sup>Optional</sup> <a name="ContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```csharp
public object ContinuousReconciliationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository"></a>

```csharp
public ArcKubernetesFluxConfigurationGitRepository GitRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#git_repository ArcKubernetesFluxConfiguration#git_repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts"></a>

```csharp
public ArcKubernetesFluxConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeouts ArcKubernetesFluxConfiguration#timeouts}

---

### ArcKubernetesFluxConfigurationGitRepository <a name="ArcKubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationGitRepository {
    string ReferenceType,
    string ReferenceValue,
    string Url,
    string HttpsCaCertBase64 = null,
    string HttpsKeyBase64 = null,
    string HttpsUser = null,
    string LocalAuthReference = null,
    string SshKnownHostsBase64 = null,
    string SshPrivateKeyBase64 = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType">ReferenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue">ReferenceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">HttpsCaCertBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">HttpsKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser">HttpsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">SshKnownHostsBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">SshPrivateKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```csharp
public string ReferenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}.

---

##### `ReferenceValue`<sup>Required</sup> <a name="ReferenceValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```csharp
public string ReferenceValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `HttpsCaCertBase64`<sup>Optional</sup> <a name="HttpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```csharp
public string HttpsCaCertBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `HttpsKeyBase64`<sup>Optional</sup> <a name="HttpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```csharp
public string HttpsKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}.

---

##### `HttpsUser`<sup>Optional</sup> <a name="HttpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```csharp
public string HttpsUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `SshKnownHostsBase64`<sup>Optional</sup> <a name="SshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```csharp
public string SshKnownHostsBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `SshPrivateKeyBase64`<sup>Optional</sup> <a name="SshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```csharp
public string SshPrivateKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationKustomizations <a name="ArcKubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationKustomizations {
    string Name,
    string[] DependsOn = null,
    object GarbageCollectionEnabled = null,
    string Path = null,
    object RecreatingEnabled = null,
    double RetryIntervalInSeconds = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">GarbageCollectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled">RecreatingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">RetryIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}.

---

##### `GarbageCollectionEnabled`<sup>Optional</sup> <a name="GarbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```csharp
public object GarbageCollectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}.

---

##### `RecreatingEnabled`<sup>Optional</sup> <a name="RecreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```csharp
public object RecreatingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}.

---

##### `RetryIntervalInSeconds`<sup>Optional</sup> <a name="RetryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```csharp
public double RetryIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationTimeouts <a name="ArcKubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesFluxConfigurationBlobStorageOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationBlobStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">PutServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">ResetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">ResetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServicePrincipal` <a name="PutServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```csharp
private void PutServicePrincipal(ArcKubernetesFluxConfigurationBlobStorageServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```csharp
private void ResetAccountKey()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```csharp
private void ResetLocalAuthReference()
```

##### `ResetSasToken` <a name="ResetSasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```csharp
private void ResetSasToken()
```

##### `ResetServicePrincipal` <a name="ResetServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```csharp
private void ResetServicePrincipal()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">SasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference ServicePrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```csharp
public string ContainerIdInput { get; }
```

- *Type:* string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```csharp
public string LocalAuthReferenceInput { get; }
```

- *Type:* string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```csharp
public string SasTokenInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipal ServicePrincipalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; }
```

- *Type:* string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```csharp
public string SasToken { get; }
```

- *Type:* string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---


### ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">ResetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">ResetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCertificateBase64` <a name="ResetClientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```csharp
private void ResetClientCertificateBase64()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```csharp
private void ResetClientCertificatePassword()
```

##### `ResetClientCertificateSendChain` <a name="ResetClientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```csharp
private void ResetClientCertificateSendChain()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">ClientCertificateBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">ClientCertificateSendChainInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">ClientCertificateBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">ClientCertificateSendChain</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientCertificateBase64Input`<sup>Optional</sup> <a name="ClientCertificateBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```csharp
public string ClientCertificateBase64Input { get; }
```

- *Type:* string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```csharp
public string ClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ClientCertificateSendChainInput`<sup>Optional</sup> <a name="ClientCertificateSendChainInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```csharp
public object ClientCertificateSendChainInput { get; }
```

- *Type:* object

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientCertificateBase64`<sup>Required</sup> <a name="ClientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```csharp
public string ClientCertificateBase64 { get; }
```

- *Type:* string

---

##### `ClientCertificatePassword`<sup>Required</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; }
```

- *Type:* string

---

##### `ClientCertificateSendChain`<sup>Required</sup> <a name="ClientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```csharp
public object ClientCertificateSendChain { get; }
```

- *Type:* object

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public ArcKubernetesFluxConfigurationBlobStorageServicePrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### ArcKubernetesFluxConfigurationBucketOutputReference <a name="ArcKubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationBucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">ResetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```csharp
private void ResetLocalAuthReference()
```

##### `ResetSecretKeyBase64` <a name="ResetSecretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```csharp
private void ResetSecretKeyBase64()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```csharp
private void ResetTlsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">SecretKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">SecretKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">TlsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```csharp
public string LocalAuthReferenceInput { get; }
```

- *Type:* string

---

##### `SecretKeyBase64Input`<sup>Optional</sup> <a name="SecretKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```csharp
public string SecretKeyBase64Input { get; }
```

- *Type:* string

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```csharp
public object TlsEnabledInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; }
```

- *Type:* string

---

##### `SecretKeyBase64`<sup>Required</sup> <a name="SecretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```csharp
public string SecretKeyBase64 { get; }
```

- *Type:* string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```csharp
public object TlsEnabled { get; }
```

- *Type:* object

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```csharp
public ArcKubernetesFluxConfigurationBucket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---


### ArcKubernetesFluxConfigurationGitRepositoryOutputReference <a name="ArcKubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">ResetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">ResetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">ResetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">ResetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">ResetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpsCaCertBase64` <a name="ResetHttpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```csharp
private void ResetHttpsCaCertBase64()
```

##### `ResetHttpsKeyBase64` <a name="ResetHttpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```csharp
private void ResetHttpsKeyBase64()
```

##### `ResetHttpsUser` <a name="ResetHttpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```csharp
private void ResetHttpsUser()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```csharp
private void ResetLocalAuthReference()
```

##### `ResetSshKnownHostsBase64` <a name="ResetSshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```csharp
private void ResetSshKnownHostsBase64()
```

##### `ResetSshPrivateKeyBase64` <a name="ResetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```csharp
private void ResetSshPrivateKeyBase64()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">HttpsCaCertBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">HttpsKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">HttpsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">ReferenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">ReferenceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">SshKnownHostsBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">SshPrivateKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">HttpsCaCertBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">HttpsKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">HttpsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">ReferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">ReferenceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">SshKnownHostsBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">SshPrivateKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpsCaCertBase64Input`<sup>Optional</sup> <a name="HttpsCaCertBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```csharp
public string HttpsCaCertBase64Input { get; }
```

- *Type:* string

---

##### `HttpsKeyBase64Input`<sup>Optional</sup> <a name="HttpsKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```csharp
public string HttpsKeyBase64Input { get; }
```

- *Type:* string

---

##### `HttpsUserInput`<sup>Optional</sup> <a name="HttpsUserInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```csharp
public string HttpsUserInput { get; }
```

- *Type:* string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```csharp
public string LocalAuthReferenceInput { get; }
```

- *Type:* string

---

##### `ReferenceTypeInput`<sup>Optional</sup> <a name="ReferenceTypeInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```csharp
public string ReferenceTypeInput { get; }
```

- *Type:* string

---

##### `ReferenceValueInput`<sup>Optional</sup> <a name="ReferenceValueInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```csharp
public string ReferenceValueInput { get; }
```

- *Type:* string

---

##### `SshKnownHostsBase64Input`<sup>Optional</sup> <a name="SshKnownHostsBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```csharp
public string SshKnownHostsBase64Input { get; }
```

- *Type:* string

---

##### `SshPrivateKeyBase64Input`<sup>Optional</sup> <a name="SshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```csharp
public string SshPrivateKeyBase64Input { get; }
```

- *Type:* string

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `HttpsCaCertBase64`<sup>Required</sup> <a name="HttpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```csharp
public string HttpsCaCertBase64 { get; }
```

- *Type:* string

---

##### `HttpsKeyBase64`<sup>Required</sup> <a name="HttpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```csharp
public string HttpsKeyBase64 { get; }
```

- *Type:* string

---

##### `HttpsUser`<sup>Required</sup> <a name="HttpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```csharp
public string HttpsUser { get; }
```

- *Type:* string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; }
```

- *Type:* string

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```csharp
public string ReferenceType { get; }
```

- *Type:* string

---

##### `ReferenceValue`<sup>Required</sup> <a name="ReferenceValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```csharp
public string ReferenceValue { get; }
```

- *Type:* string

---

##### `SshKnownHostsBase64`<sup>Required</sup> <a name="SshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```csharp
public string SshKnownHostsBase64 { get; }
```

- *Type:* string

---

##### `SshPrivateKeyBase64`<sup>Required</sup> <a name="SshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```csharp
public string SshPrivateKeyBase64 { get; }
```

- *Type:* string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public ArcKubernetesFluxConfigurationGitRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---


### ArcKubernetesFluxConfigurationKustomizationsList <a name="ArcKubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationKustomizationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get"></a>

```csharp
private ArcKubernetesFluxConfigurationKustomizationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ArcKubernetesFluxConfigurationKustomizationsOutputReference <a name="ArcKubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationKustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">ResetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">ResetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">ResetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```csharp
private void ResetDependsOn()
```

##### `ResetGarbageCollectionEnabled` <a name="ResetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```csharp
private void ResetGarbageCollectionEnabled()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRecreatingEnabled` <a name="ResetRecreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```csharp
private void ResetRecreatingEnabled()
```

##### `ResetRetryIntervalInSeconds` <a name="ResetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```csharp
private void ResetRetryIntervalInSeconds()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">GarbageCollectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">RecreatingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">RetryIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">GarbageCollectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">RecreatingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">RetryIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```csharp
public string[] DependsOnInput { get; }
```

- *Type:* string[]

---

##### `GarbageCollectionEnabledInput`<sup>Optional</sup> <a name="GarbageCollectionEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```csharp
public object GarbageCollectionEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RecreatingEnabledInput`<sup>Optional</sup> <a name="RecreatingEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```csharp
public object RecreatingEnabledInput { get; }
```

- *Type:* object

---

##### `RetryIntervalInSecondsInput`<sup>Optional</sup> <a name="RetryIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```csharp
public double RetryIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `GarbageCollectionEnabled`<sup>Required</sup> <a name="GarbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```csharp
public object GarbageCollectionEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RecreatingEnabled`<sup>Required</sup> <a name="RecreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```csharp
public object RecreatingEnabled { get; }
```

- *Type:* object

---

##### `RetryIntervalInSeconds`<sup>Required</sup> <a name="RetryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```csharp
public double RetryIntervalInSeconds { get; }
```

- *Type:* double

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ArcKubernetesFluxConfigurationTimeoutsOutputReference <a name="ArcKubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesFluxConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



