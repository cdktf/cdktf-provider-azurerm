# `healthcareFhirService` Submodule <a name="`healthcareFhirService` Submodule" id="@cdktf/provider-azurerm.healthcareFhirService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirService <a name="HealthcareFhirService" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service azurerm_healthcare_fhir_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirService(Construct Scope, string Id, HealthcareFhirServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig">HealthcareFhirServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig">HealthcareFhirServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact">PutOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds">ResetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName">ResetConfigurationExportStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl">ResetContainerRegistryLoginServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact">ResetOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication"></a>

```csharp
private void PutAuthentication(HealthcareFhirServiceAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors"></a>

```csharp
private void PutCors(HealthcareFhirServiceCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity"></a>

```csharp
private void PutIdentity(HealthcareFhirServiceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `PutOciArtifact` <a name="PutOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact"></a>

```csharp
private void PutOciArtifact(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts"></a>

```csharp
private void PutTimeouts(HealthcareFhirServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---

##### `ResetAccessPolicyObjectIds` <a name="ResetAccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds"></a>

```csharp
private void ResetAccessPolicyObjectIds()
```

##### `ResetConfigurationExportStorageAccountName` <a name="ResetConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName"></a>

```csharp
private void ResetConfigurationExportStorageAccountName()
```

##### `ResetContainerRegistryLoginServerUrl` <a name="ResetContainerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl"></a>

```csharp
private void ResetContainerRegistryLoginServerUrl()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetOciArtifact` <a name="ResetOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact"></a>

```csharp
private void ResetOciArtifact()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareFhirService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareFhirService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareFhirService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareFhirService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareFhirService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HealthcareFhirService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareFhirService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareFhirService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareFhirService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact">OciArtifact</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput">AccessPolicyObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput">ConfigurationExportStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput">ContainerRegistryLoginServerUrlInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput">OciArtifactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds">AccessPolicyObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName">ConfigurationExportStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl">ContainerRegistryLoginServerUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication"></a>

```csharp
public HealthcareFhirServiceAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors"></a>

```csharp
public HealthcareFhirServiceCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity"></a>

```csharp
public HealthcareFhirServiceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a>

---

##### `OciArtifact`<sup>Required</sup> <a name="OciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact"></a>

```csharp
public HealthcareFhirServiceOciArtifactList OciArtifact { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a>

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled"></a>

```csharp
public IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts"></a>

```csharp
public HealthcareFhirServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a>

---

##### `AccessPolicyObjectIdsInput`<sup>Optional</sup> <a name="AccessPolicyObjectIdsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput"></a>

```csharp
public string[] AccessPolicyObjectIdsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput"></a>

```csharp
public HealthcareFhirServiceAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `ConfigurationExportStorageAccountNameInput`<sup>Optional</sup> <a name="ConfigurationExportStorageAccountNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput"></a>

```csharp
public string ConfigurationExportStorageAccountNameInput { get; }
```

- *Type:* string

---

##### `ContainerRegistryLoginServerUrlInput`<sup>Optional</sup> <a name="ContainerRegistryLoginServerUrlInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput"></a>

```csharp
public string[] ContainerRegistryLoginServerUrlInput { get; }
```

- *Type:* string[]

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput"></a>

```csharp
public HealthcareFhirServiceCors CorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput"></a>

```csharp
public HealthcareFhirServiceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OciArtifactInput`<sup>Optional</sup> <a name="OciArtifactInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput"></a>

```csharp
public object OciArtifactInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AccessPolicyObjectIds`<sup>Required</sup> <a name="AccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds"></a>

```csharp
public string[] AccessPolicyObjectIds { get; }
```

- *Type:* string[]

---

##### `ConfigurationExportStorageAccountName`<sup>Required</sup> <a name="ConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName"></a>

```csharp
public string ConfigurationExportStorageAccountName { get; }
```

- *Type:* string

---

##### `ContainerRegistryLoginServerUrl`<sup>Required</sup> <a name="ContainerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl"></a>

```csharp
public string[] ContainerRegistryLoginServerUrl { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirServiceAuthentication <a name="HealthcareFhirServiceAuthentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceAuthentication {
    string Audience,
    string Authority,
    object SmartProxyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience">Audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority">Authority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled">SmartProxyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}.

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority"></a>

```csharp
public string Authority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}.

---

##### `SmartProxyEnabled`<sup>Optional</sup> <a name="SmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled"></a>

```csharp
public object SmartProxyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}.

---

### HealthcareFhirServiceConfig <a name="HealthcareFhirServiceConfig" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    HealthcareFhirServiceAuthentication Authentication,
    string Location,
    string Name,
    string ResourceGroupName,
    string WorkspaceId,
    string[] AccessPolicyObjectIds = null,
    string ConfigurationExportStorageAccountName = null,
    string[] ContainerRegistryLoginServerUrl = null,
    HealthcareFhirServiceCors Cors = null,
    string Id = null,
    HealthcareFhirServiceIdentity Identity = null,
    string Kind = null,
    object OciArtifact = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    HealthcareFhirServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds">AccessPolicyObjectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName">ConfigurationExportStorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl">ContainerRegistryLoginServerUrl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact">OciArtifact</a></code> | <code>object</code> | oci_artifact block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication"></a>

```csharp
public HealthcareFhirServiceAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#authentication HealthcareFhirService#authentication}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}.

---

##### `AccessPolicyObjectIds`<sup>Optional</sup> <a name="AccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds"></a>

```csharp
public string[] AccessPolicyObjectIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}.

---

##### `ConfigurationExportStorageAccountName`<sup>Optional</sup> <a name="ConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName"></a>

```csharp
public string ConfigurationExportStorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}.

---

##### `ContainerRegistryLoginServerUrl`<sup>Optional</sup> <a name="ContainerRegistryLoginServerUrl" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl"></a>

```csharp
public string[] ContainerRegistryLoginServerUrl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors"></a>

```csharp
public HealthcareFhirServiceCors Cors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#cors HealthcareFhirService#cors}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity"></a>

```csharp
public HealthcareFhirServiceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#identity HealthcareFhirService#identity}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}.

---

##### `OciArtifact`<sup>Optional</sup> <a name="OciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact"></a>

```csharp
public object OciArtifact { get; set; }
```

- *Type:* object

oci_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#oci_artifact HealthcareFhirService#oci_artifact}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts"></a>

```csharp
public HealthcareFhirServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#timeouts HealthcareFhirService#timeouts}

---

### HealthcareFhirServiceCors <a name="HealthcareFhirServiceCors" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceCors {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    object CredentialsAllowed = null,
    double MaxAgeInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed">CredentialsAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}.

---

##### `CredentialsAllowed`<sup>Optional</sup> <a name="CredentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed"></a>

```csharp
public object CredentialsAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}.

---

##### `MaxAgeInSeconds`<sup>Optional</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}.

---

### HealthcareFhirServiceIdentity <a name="HealthcareFhirServiceIdentity" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}.

---

### HealthcareFhirServiceOciArtifact <a name="HealthcareFhirServiceOciArtifact" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceOciArtifact {
    string LoginServer,
    string Digest = null,
    string ImageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer">LoginServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest">Digest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}. |

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer"></a>

```csharp
public string LoginServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}.

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest"></a>

```csharp
public string Digest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}.

---

### HealthcareFhirServiceTimeouts <a name="HealthcareFhirServiceTimeouts" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirServiceAuthenticationOutputReference <a name="HealthcareFhirServiceAuthenticationOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled">ResetSmartProxyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSmartProxyEnabled` <a name="ResetSmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled"></a>

```csharp
private void ResetSmartProxyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput">SmartProxyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority">Authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled">SmartProxyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput"></a>

```csharp
public string AuthorityInput { get; }
```

- *Type:* string

---

##### `SmartProxyEnabledInput`<sup>Optional</sup> <a name="SmartProxyEnabledInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput"></a>

```csharp
public object SmartProxyEnabledInput { get; }
```

- *Type:* object

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority"></a>

```csharp
public string Authority { get; }
```

- *Type:* string

---

##### `SmartProxyEnabled`<sup>Required</sup> <a name="SmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled"></a>

```csharp
public object SmartProxyEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirServiceAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---


### HealthcareFhirServiceCorsOutputReference <a name="HealthcareFhirServiceCorsOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed">ResetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds">ResetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialsAllowed` <a name="ResetCredentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed"></a>

```csharp
private void ResetCredentialsAllowed()
```

##### `ResetMaxAgeInSeconds` <a name="ResetMaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds"></a>

```csharp
private void ResetMaxAgeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput">CredentialsAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed">CredentialsAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `CredentialsAllowedInput`<sup>Optional</sup> <a name="CredentialsAllowedInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput"></a>

```csharp
public object CredentialsAllowedInput { get; }
```

- *Type:* object

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `CredentialsAllowed`<sup>Required</sup> <a name="CredentialsAllowed" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed"></a>

```csharp
public object CredentialsAllowed { get; }
```

- *Type:* object

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirServiceCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---


### HealthcareFhirServiceIdentityOutputReference <a name="HealthcareFhirServiceIdentityOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue"></a>

```csharp
public HealthcareFhirServiceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---


### HealthcareFhirServiceOciArtifactList <a name="HealthcareFhirServiceOciArtifactList" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceOciArtifactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get"></a>

```csharp
private HealthcareFhirServiceOciArtifactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HealthcareFhirServiceOciArtifactOutputReference <a name="HealthcareFhirServiceOciArtifactOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceOciArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest"></a>

```csharp
private void ResetDigest()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName"></a>

```csharp
private void ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput">DigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput">LoginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer">LoginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput"></a>

```csharp
public string DigestInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `LoginServerInput`<sup>Optional</sup> <a name="LoginServerInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput"></a>

```csharp
public string LoginServerInput { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer"></a>

```csharp
public string LoginServer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HealthcareFhirServiceTimeoutsOutputReference <a name="HealthcareFhirServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareFhirServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



