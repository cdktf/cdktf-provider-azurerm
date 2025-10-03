# `machineLearningWorkspace` Submodule <a name="`machineLearningWorkspace` Submodule" id="@cdktf/provider-azurerm.machineLearningWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspace <a name="MachineLearningWorkspace" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace azurerm_machine_learning_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspace(Construct Scope, string Id, MachineLearningWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig">MachineLearningWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig">MachineLearningWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore">PutFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork">PutManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute">PutServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetContainerRegistryId">ResetContainerRegistryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFeatureStore">ResetFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetHighBusinessImpact">ResetHighBusinessImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetImageBuildComputeName">ResetImageBuildComputeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetManagedNetwork">ResetManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPrimaryUserAssignedIdentity">ResetPrimaryUserAssignedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServerlessCompute">ResetServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServiceSideEncryptionEnabled">ResetServiceSideEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetV1LegacyModeEnabled">ResetV1LegacyModeEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption"></a>

```csharp
private void PutEncryption(MachineLearningWorkspaceEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---

##### `PutFeatureStore` <a name="PutFeatureStore" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore"></a>

```csharp
private void PutFeatureStore(MachineLearningWorkspaceFeatureStore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity"></a>

```csharp
private void PutIdentity(MachineLearningWorkspaceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---

##### `PutManagedNetwork` <a name="PutManagedNetwork" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork"></a>

```csharp
private void PutManagedNetwork(MachineLearningWorkspaceManagedNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---

##### `PutServerlessCompute` <a name="PutServerlessCompute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute"></a>

```csharp
private void PutServerlessCompute(MachineLearningWorkspaceServerlessCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(MachineLearningWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

---

##### `ResetContainerRegistryId` <a name="ResetContainerRegistryId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetContainerRegistryId"></a>

```csharp
private void ResetContainerRegistryId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetFeatureStore` <a name="ResetFeatureStore" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFeatureStore"></a>

```csharp
private void ResetFeatureStore()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetHighBusinessImpact` <a name="ResetHighBusinessImpact" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetHighBusinessImpact"></a>

```csharp
private void ResetHighBusinessImpact()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageBuildComputeName` <a name="ResetImageBuildComputeName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetImageBuildComputeName"></a>

```csharp
private void ResetImageBuildComputeName()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetManagedNetwork` <a name="ResetManagedNetwork" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetManagedNetwork"></a>

```csharp
private void ResetManagedNetwork()
```

##### `ResetPrimaryUserAssignedIdentity` <a name="ResetPrimaryUserAssignedIdentity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPrimaryUserAssignedIdentity"></a>

```csharp
private void ResetPrimaryUserAssignedIdentity()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetServerlessCompute` <a name="ResetServerlessCompute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServerlessCompute"></a>

```csharp
private void ResetServerlessCompute()
```

##### `ResetServiceSideEncryptionEnabled` <a name="ResetServiceSideEncryptionEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServiceSideEncryptionEnabled"></a>

```csharp
private void ResetServiceSideEncryptionEnabled()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetV1LegacyModeEnabled` <a name="ResetV1LegacyModeEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetV1LegacyModeEnabled"></a>

```csharp
private void ResetV1LegacyModeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MachineLearningWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MachineLearningWorkspace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference">MachineLearningWorkspaceEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStore">FeatureStore</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference">MachineLearningWorkspaceFeatureStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference">MachineLearningWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetwork">ManagedNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference">MachineLearningWorkspaceManagedNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessCompute">ServerlessCompute</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference">MachineLearningWorkspaceServerlessComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference">MachineLearningWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsIdInput">ApplicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStoreInput">FeatureStoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpactInput">HighBusinessImpactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeNameInput">ImageBuildComputeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetworkInput">ManagedNetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentityInput">PrimaryUserAssignedIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessComputeInput">ServerlessComputeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabledInput">ServiceSideEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabledInput">V1LegacyModeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryId">ContainerRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpact">HighBusinessImpact</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeName">ImageBuildComputeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentity">PrimaryUserAssignedIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabled">ServiceSideEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabled">V1LegacyModeEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryption"></a>

```csharp
public MachineLearningWorkspaceEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference">MachineLearningWorkspaceEncryptionOutputReference</a>

---

##### `FeatureStore`<sup>Required</sup> <a name="FeatureStore" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStore"></a>

```csharp
public MachineLearningWorkspaceFeatureStoreOutputReference FeatureStore { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference">MachineLearningWorkspaceFeatureStoreOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identity"></a>

```csharp
public MachineLearningWorkspaceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference">MachineLearningWorkspaceIdentityOutputReference</a>

---

##### `ManagedNetwork`<sup>Required</sup> <a name="ManagedNetwork" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetwork"></a>

```csharp
public MachineLearningWorkspaceManagedNetworkOutputReference ManagedNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference">MachineLearningWorkspaceManagedNetworkOutputReference</a>

---

##### `ServerlessCompute`<sup>Required</sup> <a name="ServerlessCompute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessCompute"></a>

```csharp
public MachineLearningWorkspaceServerlessComputeOutputReference ServerlessCompute { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference">MachineLearningWorkspaceServerlessComputeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeouts"></a>

```csharp
public MachineLearningWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference">MachineLearningWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `ApplicationInsightsIdInput`<sup>Optional</sup> <a name="ApplicationInsightsIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsIdInput"></a>

```csharp
public string ApplicationInsightsIdInput { get; }
```

- *Type:* string

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryIdInput"></a>

```csharp
public string ContainerRegistryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryptionInput"></a>

```csharp
public MachineLearningWorkspaceEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---

##### `FeatureStoreInput`<sup>Optional</sup> <a name="FeatureStoreInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStoreInput"></a>

```csharp
public MachineLearningWorkspaceFeatureStore FeatureStoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `HighBusinessImpactInput`<sup>Optional</sup> <a name="HighBusinessImpactInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpactInput"></a>

```csharp
public object HighBusinessImpactInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identityInput"></a>

```csharp
public MachineLearningWorkspaceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageBuildComputeNameInput`<sup>Optional</sup> <a name="ImageBuildComputeNameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeNameInput"></a>

```csharp
public string ImageBuildComputeNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedNetworkInput`<sup>Optional</sup> <a name="ManagedNetworkInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetworkInput"></a>

```csharp
public MachineLearningWorkspaceManagedNetwork ManagedNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryUserAssignedIdentityInput`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentityInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentityInput"></a>

```csharp
public string PrimaryUserAssignedIdentityInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServerlessComputeInput`<sup>Optional</sup> <a name="ServerlessComputeInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessComputeInput"></a>

```csharp
public MachineLearningWorkspaceServerlessCompute ServerlessComputeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---

##### `ServiceSideEncryptionEnabledInput`<sup>Optional</sup> <a name="ServiceSideEncryptionEnabledInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabledInput"></a>

```csharp
public object ServiceSideEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `V1LegacyModeEnabledInput`<sup>Optional</sup> <a name="V1LegacyModeEnabledInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabledInput"></a>

```csharp
public object V1LegacyModeEnabledInput { get; }
```

- *Type:* object

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsId"></a>

```csharp
public string ApplicationInsightsId { get; }
```

- *Type:* string

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryId"></a>

```csharp
public string ContainerRegistryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `HighBusinessImpact`<sup>Required</sup> <a name="HighBusinessImpact" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpact"></a>

```csharp
public object HighBusinessImpact { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageBuildComputeName`<sup>Required</sup> <a name="ImageBuildComputeName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeName"></a>

```csharp
public string ImageBuildComputeName { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryUserAssignedIdentity`<sup>Required</sup> <a name="PrimaryUserAssignedIdentity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentity"></a>

```csharp
public string PrimaryUserAssignedIdentity { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServiceSideEncryptionEnabled`<sup>Required</sup> <a name="ServiceSideEncryptionEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabled"></a>

```csharp
public object ServiceSideEncryptionEnabled { get; }
```

- *Type:* object

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `V1LegacyModeEnabled`<sup>Required</sup> <a name="V1LegacyModeEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabled"></a>

```csharp
public object V1LegacyModeEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceConfig <a name="MachineLearningWorkspaceConfig" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationInsightsId,
    MachineLearningWorkspaceIdentity Identity,
    string KeyVaultId,
    string Location,
    string Name,
    string ResourceGroupName,
    string StorageAccountId,
    string ContainerRegistryId = null,
    string Description = null,
    MachineLearningWorkspaceEncryption Encryption = null,
    MachineLearningWorkspaceFeatureStore FeatureStore = null,
    string FriendlyName = null,
    object HighBusinessImpact = null,
    string Id = null,
    string ImageBuildComputeName = null,
    string Kind = null,
    MachineLearningWorkspaceManagedNetwork ManagedNetwork = null,
    string PrimaryUserAssignedIdentity = null,
    object PublicNetworkAccessEnabled = null,
    MachineLearningWorkspaceServerlessCompute ServerlessCompute = null,
    object ServiceSideEncryptionEnabled = null,
    string SkuName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MachineLearningWorkspaceTimeouts Timeouts = null,
    object V1LegacyModeEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.featureStore">FeatureStore</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | feature_store block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.friendlyName">FriendlyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.highBusinessImpact">HighBusinessImpact</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.imageBuildComputeName">ImageBuildComputeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.managedNetwork">ManagedNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | managed_network block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.primaryUserAssignedIdentity">PrimaryUserAssignedIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serverlessCompute">ServerlessCompute</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | serverless_compute block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serviceSideEncryptionEnabled">ServiceSideEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#service_side_encryption_enabled MachineLearningWorkspace#service_side_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.v1LegacyModeEnabled">V1LegacyModeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.applicationInsightsId"></a>

```csharp
public string ApplicationInsightsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.identity"></a>

```csharp
public MachineLearningWorkspaceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#identity MachineLearningWorkspace#identity}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}.

---

##### `ContainerRegistryId`<sup>Optional</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.containerRegistryId"></a>

```csharp
public string ContainerRegistryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.encryption"></a>

```csharp
public MachineLearningWorkspaceEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#encryption MachineLearningWorkspace#encryption}

---

##### `FeatureStore`<sup>Optional</sup> <a name="FeatureStore" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.featureStore"></a>

```csharp
public MachineLearningWorkspaceFeatureStore FeatureStore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

feature_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#feature_store MachineLearningWorkspace#feature_store}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}.

---

##### `HighBusinessImpact`<sup>Optional</sup> <a name="HighBusinessImpact" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.highBusinessImpact"></a>

```csharp
public object HighBusinessImpact { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageBuildComputeName`<sup>Optional</sup> <a name="ImageBuildComputeName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.imageBuildComputeName"></a>

```csharp
public string ImageBuildComputeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}.

---

##### `ManagedNetwork`<sup>Optional</sup> <a name="ManagedNetwork" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.managedNetwork"></a>

```csharp
public MachineLearningWorkspaceManagedNetwork ManagedNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

managed_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#managed_network MachineLearningWorkspace#managed_network}

---

##### `PrimaryUserAssignedIdentity`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.primaryUserAssignedIdentity"></a>

```csharp
public string PrimaryUserAssignedIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}.

---

##### `ServerlessCompute`<sup>Optional</sup> <a name="ServerlessCompute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serverlessCompute"></a>

```csharp
public MachineLearningWorkspaceServerlessCompute ServerlessCompute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

serverless_compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#serverless_compute MachineLearningWorkspace#serverless_compute}

---

##### `ServiceSideEncryptionEnabled`<sup>Optional</sup> <a name="ServiceSideEncryptionEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serviceSideEncryptionEnabled"></a>

```csharp
public object ServiceSideEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#service_side_encryption_enabled MachineLearningWorkspace#service_side_encryption_enabled}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.timeouts"></a>

```csharp
public MachineLearningWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#timeouts MachineLearningWorkspace#timeouts}

---

##### `V1LegacyModeEnabled`<sup>Optional</sup> <a name="V1LegacyModeEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.v1LegacyModeEnabled"></a>

```csharp
public object V1LegacyModeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}.

---

### MachineLearningWorkspaceEncryption <a name="MachineLearningWorkspaceEncryption" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceEncryption {
    string KeyId,
    string KeyVaultId,
    string UserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}.

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}.

---

### MachineLearningWorkspaceFeatureStore <a name="MachineLearningWorkspaceFeatureStore" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceFeatureStore {
    string ComputerSparkRuntimeVersion = null,
    string OfflineConnectionName = null,
    string OnlineConnectionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.computerSparkRuntimeVersion">ComputerSparkRuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.offlineConnectionName">OfflineConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.onlineConnectionName">OnlineConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}. |

---

##### `ComputerSparkRuntimeVersion`<sup>Optional</sup> <a name="ComputerSparkRuntimeVersion" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.computerSparkRuntimeVersion"></a>

```csharp
public string ComputerSparkRuntimeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}.

---

##### `OfflineConnectionName`<sup>Optional</sup> <a name="OfflineConnectionName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.offlineConnectionName"></a>

```csharp
public string OfflineConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}.

---

##### `OnlineConnectionName`<sup>Optional</sup> <a name="OnlineConnectionName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.onlineConnectionName"></a>

```csharp
public string OnlineConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}.

---

### MachineLearningWorkspaceIdentity <a name="MachineLearningWorkspaceIdentity" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}.

---

### MachineLearningWorkspaceManagedNetwork <a name="MachineLearningWorkspaceManagedNetwork" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceManagedNetwork {
    string IsolationMode = null,
    object ProvisionOnCreationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.isolationMode">IsolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.provisionOnCreationEnabled">ProvisionOnCreationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#provision_on_creation_enabled MachineLearningWorkspace#provision_on_creation_enabled}. |

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.isolationMode"></a>

```csharp
public string IsolationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}.

---

##### `ProvisionOnCreationEnabled`<sup>Optional</sup> <a name="ProvisionOnCreationEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.provisionOnCreationEnabled"></a>

```csharp
public object ProvisionOnCreationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#provision_on_creation_enabled MachineLearningWorkspace#provision_on_creation_enabled}.

---

### MachineLearningWorkspaceServerlessCompute <a name="MachineLearningWorkspaceServerlessCompute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceServerlessCompute {
    object PublicIpEnabled = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}. |

---

##### `PublicIpEnabled`<sup>Optional</sup> <a name="PublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.publicIpEnabled"></a>

```csharp
public object PublicIpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}.

---

### MachineLearningWorkspaceTimeouts <a name="MachineLearningWorkspaceTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceEncryptionOutputReference <a name="MachineLearningWorkspaceEncryptionOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.internalValue"></a>

```csharp
public MachineLearningWorkspaceEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---


### MachineLearningWorkspaceFeatureStoreOutputReference <a name="MachineLearningWorkspaceFeatureStoreOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceFeatureStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetComputerSparkRuntimeVersion">ResetComputerSparkRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOfflineConnectionName">ResetOfflineConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOnlineConnectionName">ResetOnlineConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputerSparkRuntimeVersion` <a name="ResetComputerSparkRuntimeVersion" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetComputerSparkRuntimeVersion"></a>

```csharp
private void ResetComputerSparkRuntimeVersion()
```

##### `ResetOfflineConnectionName` <a name="ResetOfflineConnectionName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOfflineConnectionName"></a>

```csharp
private void ResetOfflineConnectionName()
```

##### `ResetOnlineConnectionName` <a name="ResetOnlineConnectionName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOnlineConnectionName"></a>

```csharp
private void ResetOnlineConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersionInput">ComputerSparkRuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionNameInput">OfflineConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionNameInput">OnlineConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersion">ComputerSparkRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionName">OfflineConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionName">OnlineConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputerSparkRuntimeVersionInput`<sup>Optional</sup> <a name="ComputerSparkRuntimeVersionInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersionInput"></a>

```csharp
public string ComputerSparkRuntimeVersionInput { get; }
```

- *Type:* string

---

##### `OfflineConnectionNameInput`<sup>Optional</sup> <a name="OfflineConnectionNameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionNameInput"></a>

```csharp
public string OfflineConnectionNameInput { get; }
```

- *Type:* string

---

##### `OnlineConnectionNameInput`<sup>Optional</sup> <a name="OnlineConnectionNameInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionNameInput"></a>

```csharp
public string OnlineConnectionNameInput { get; }
```

- *Type:* string

---

##### `ComputerSparkRuntimeVersion`<sup>Required</sup> <a name="ComputerSparkRuntimeVersion" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersion"></a>

```csharp
public string ComputerSparkRuntimeVersion { get; }
```

- *Type:* string

---

##### `OfflineConnectionName`<sup>Required</sup> <a name="OfflineConnectionName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionName"></a>

```csharp
public string OfflineConnectionName { get; }
```

- *Type:* string

---

##### `OnlineConnectionName`<sup>Required</sup> <a name="OnlineConnectionName" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionName"></a>

```csharp
public string OnlineConnectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.internalValue"></a>

```csharp
public MachineLearningWorkspaceFeatureStore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---


### MachineLearningWorkspaceIdentityOutputReference <a name="MachineLearningWorkspaceIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.internalValue"></a>

```csharp
public MachineLearningWorkspaceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---


### MachineLearningWorkspaceManagedNetworkOutputReference <a name="MachineLearningWorkspaceManagedNetworkOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceManagedNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetProvisionOnCreationEnabled">ResetProvisionOnCreationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetIsolationMode"></a>

```csharp
private void ResetIsolationMode()
```

##### `ResetProvisionOnCreationEnabled` <a name="ResetProvisionOnCreationEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetProvisionOnCreationEnabled"></a>

```csharp
private void ResetProvisionOnCreationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationModeInput">IsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabledInput">ProvisionOnCreationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationMode">IsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabled">ProvisionOnCreationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationModeInput"></a>

```csharp
public string IsolationModeInput { get; }
```

- *Type:* string

---

##### `ProvisionOnCreationEnabledInput`<sup>Optional</sup> <a name="ProvisionOnCreationEnabledInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabledInput"></a>

```csharp
public object ProvisionOnCreationEnabledInput { get; }
```

- *Type:* object

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationMode"></a>

```csharp
public string IsolationMode { get; }
```

- *Type:* string

---

##### `ProvisionOnCreationEnabled`<sup>Required</sup> <a name="ProvisionOnCreationEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabled"></a>

```csharp
public object ProvisionOnCreationEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.internalValue"></a>

```csharp
public MachineLearningWorkspaceManagedNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---


### MachineLearningWorkspaceServerlessComputeOutputReference <a name="MachineLearningWorkspaceServerlessComputeOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceServerlessComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetPublicIpEnabled">ResetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicIpEnabled` <a name="ResetPublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetPublicIpEnabled"></a>

```csharp
private void ResetPublicIpEnabled()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabledInput">PublicIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicIpEnabledInput`<sup>Optional</sup> <a name="PublicIpEnabledInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabledInput"></a>

```csharp
public object PublicIpEnabledInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `PublicIpEnabled`<sup>Required</sup> <a name="PublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabled"></a>

```csharp
public object PublicIpEnabled { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.internalValue"></a>

```csharp
public MachineLearningWorkspaceServerlessCompute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---


### MachineLearningWorkspaceTimeoutsOutputReference <a name="MachineLearningWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MachineLearningWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



