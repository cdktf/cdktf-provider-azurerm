# `arcKubernetesClusterExtension` Submodule <a name="`arcKubernetesClusterExtension` Submodule" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesClusterExtension <a name="ArcKubernetesClusterExtension" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension azurerm_arc_kubernetes_cluster_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesClusterExtension(Construct Scope, string Id, ArcKubernetesClusterExtensionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig">ArcKubernetesClusterExtensionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig">ArcKubernetesClusterExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationProtectedSettings">ResetConfigurationProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationSettings">ResetConfigurationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseNamespace">ResetReleaseNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseTrain">ResetReleaseTrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTargetNamespace">ResetTargetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putIdentity"></a>

```csharp
private void PutIdentity(ArcKubernetesClusterExtensionIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putTimeouts"></a>

```csharp
private void PutTimeouts(ArcKubernetesClusterExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts">ArcKubernetesClusterExtensionTimeouts</a>

---

##### `ResetConfigurationProtectedSettings` <a name="ResetConfigurationProtectedSettings" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationProtectedSettings"></a>

```csharp
private void ResetConfigurationProtectedSettings()
```

##### `ResetConfigurationSettings` <a name="ResetConfigurationSettings" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationSettings"></a>

```csharp
private void ResetConfigurationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReleaseNamespace` <a name="ResetReleaseNamespace" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseNamespace"></a>

```csharp
private void ResetReleaseNamespace()
```

##### `ResetReleaseTrain` <a name="ResetReleaseTrain" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseTrain"></a>

```csharp
private void ResetReleaseTrain()
```

##### `ResetTargetNamespace` <a name="ResetTargetNamespace" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTargetNamespace"></a>

```csharp
private void ResetTargetNamespace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArcKubernetesClusterExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesClusterExtension.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesClusterExtension.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesClusterExtension.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ArcKubernetesClusterExtension.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ArcKubernetesClusterExtension resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcKubernetesClusterExtension to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcKubernetesClusterExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesClusterExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference">ArcKubernetesClusterExtensionIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference">ArcKubernetesClusterExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettingsInput">ConfigurationProtectedSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettingsInput">ConfigurationSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionTypeInput">ExtensionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespaceInput">ReleaseNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrainInput">ReleaseTrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespaceInput">TargetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettings">ConfigurationProtectedSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettings">ConfigurationSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionType">ExtensionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespace">ReleaseNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrain">ReleaseTrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespace">TargetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identity"></a>

```csharp
public ArcKubernetesClusterExtensionIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference">ArcKubernetesClusterExtensionIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeouts"></a>

```csharp
public ArcKubernetesClusterExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference">ArcKubernetesClusterExtensionTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationProtectedSettingsInput`<sup>Optional</sup> <a name="ConfigurationProtectedSettingsInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationProtectedSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConfigurationSettingsInput`<sup>Optional</sup> <a name="ConfigurationSettingsInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtensionTypeInput`<sup>Optional</sup> <a name="ExtensionTypeInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionTypeInput"></a>

```csharp
public string ExtensionTypeInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identityInput"></a>

```csharp
public ArcKubernetesClusterExtensionIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReleaseNamespaceInput`<sup>Optional</sup> <a name="ReleaseNamespaceInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespaceInput"></a>

```csharp
public string ReleaseNamespaceInput { get; }
```

- *Type:* string

---

##### `ReleaseTrainInput`<sup>Optional</sup> <a name="ReleaseTrainInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrainInput"></a>

```csharp
public string ReleaseTrainInput { get; }
```

- *Type:* string

---

##### `TargetNamespaceInput`<sup>Optional</sup> <a name="TargetNamespaceInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespaceInput"></a>

```csharp
public string TargetNamespaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ConfigurationProtectedSettings`<sup>Required</sup> <a name="ConfigurationProtectedSettings" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationProtectedSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConfigurationSettings`<sup>Required</sup> <a name="ConfigurationSettings" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtensionType`<sup>Required</sup> <a name="ExtensionType" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionType"></a>

```csharp
public string ExtensionType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReleaseNamespace`<sup>Required</sup> <a name="ReleaseNamespace" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespace"></a>

```csharp
public string ReleaseNamespace { get; }
```

- *Type:* string

---

##### `ReleaseTrain`<sup>Required</sup> <a name="ReleaseTrain" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrain"></a>

```csharp
public string ReleaseTrain { get; }
```

- *Type:* string

---

##### `TargetNamespace`<sup>Required</sup> <a name="TargetNamespace" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespace"></a>

```csharp
public string TargetNamespace { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesClusterExtensionConfig <a name="ArcKubernetesClusterExtensionConfig" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesClusterExtensionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string ExtensionType,
    ArcKubernetesClusterExtensionIdentity Identity,
    string Name,
    System.Collections.Generic.IDictionary<string, string> ConfigurationProtectedSettings = null,
    System.Collections.Generic.IDictionary<string, string> ConfigurationSettings = null,
    string Id = null,
    string ReleaseNamespace = null,
    string ReleaseTrain = null,
    string TargetNamespace = null,
    ArcKubernetesClusterExtensionTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#cluster_id ArcKubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.extensionType">ExtensionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#extension_type ArcKubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#name ArcKubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationProtectedSettings">ConfigurationProtectedSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#configuration_protected_settings ArcKubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationSettings">ConfigurationSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#configuration_settings ArcKubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#id ArcKubernetesClusterExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseNamespace">ReleaseNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#release_namespace ArcKubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseTrain">ReleaseTrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#release_train ArcKubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.targetNamespace">TargetNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#target_namespace ArcKubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts">ArcKubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#version ArcKubernetesClusterExtension#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#cluster_id ArcKubernetesClusterExtension#cluster_id}.

---

##### `ExtensionType`<sup>Required</sup> <a name="ExtensionType" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.extensionType"></a>

```csharp
public string ExtensionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#extension_type ArcKubernetesClusterExtension#extension_type}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.identity"></a>

```csharp
public ArcKubernetesClusterExtensionIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#identity ArcKubernetesClusterExtension#identity}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#name ArcKubernetesClusterExtension#name}.

---

##### `ConfigurationProtectedSettings`<sup>Optional</sup> <a name="ConfigurationProtectedSettings" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationProtectedSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationProtectedSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#configuration_protected_settings ArcKubernetesClusterExtension#configuration_protected_settings}.

---

##### `ConfigurationSettings`<sup>Optional</sup> <a name="ConfigurationSettings" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#configuration_settings ArcKubernetesClusterExtension#configuration_settings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#id ArcKubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReleaseNamespace`<sup>Optional</sup> <a name="ReleaseNamespace" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseNamespace"></a>

```csharp
public string ReleaseNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#release_namespace ArcKubernetesClusterExtension#release_namespace}.

---

##### `ReleaseTrain`<sup>Optional</sup> <a name="ReleaseTrain" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseTrain"></a>

```csharp
public string ReleaseTrain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#release_train ArcKubernetesClusterExtension#release_train}.

---

##### `TargetNamespace`<sup>Optional</sup> <a name="TargetNamespace" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.targetNamespace"></a>

```csharp
public string TargetNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#target_namespace ArcKubernetesClusterExtension#target_namespace}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.timeouts"></a>

```csharp
public ArcKubernetesClusterExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts">ArcKubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#timeouts ArcKubernetesClusterExtension#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#version ArcKubernetesClusterExtension#version}.

---

### ArcKubernetesClusterExtensionIdentity <a name="ArcKubernetesClusterExtensionIdentity" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesClusterExtensionIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#type ArcKubernetesClusterExtension#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#type ArcKubernetesClusterExtension#type}.

---

### ArcKubernetesClusterExtensionTimeouts <a name="ArcKubernetesClusterExtensionTimeouts" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesClusterExtensionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#create ArcKubernetesClusterExtension#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#delete ArcKubernetesClusterExtension#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#read ArcKubernetesClusterExtension#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#update ArcKubernetesClusterExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#create ArcKubernetesClusterExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#delete ArcKubernetesClusterExtension#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#read ArcKubernetesClusterExtension#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/arc_kubernetes_cluster_extension#update ArcKubernetesClusterExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesClusterExtensionIdentityOutputReference <a name="ArcKubernetesClusterExtensionIdentityOutputReference" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesClusterExtensionIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.internalValue"></a>

```csharp
public ArcKubernetesClusterExtensionIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

---


### ArcKubernetesClusterExtensionTimeoutsOutputReference <a name="ArcKubernetesClusterExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ArcKubernetesClusterExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



