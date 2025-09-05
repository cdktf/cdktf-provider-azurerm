# `apiManagementApiDiagnostic` Submodule <a name="`apiManagementApiDiagnostic` Submodule" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiDiagnostic <a name="ApiManagementApiDiagnostic" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic azurerm_api_management_api_diagnostic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnostic(Construct Scope, string Id, ApiManagementApiDiagnosticConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig">ApiManagementApiDiagnosticConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig">ApiManagementApiDiagnosticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest">PutBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse">PutBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest">PutFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse">PutFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetAlwaysLogErrors">ResetAlwaysLogErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendRequest">ResetBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendResponse">ResetBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendRequest">ResetFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendResponse">ResetFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetHttpCorrelationProtocol">ResetHttpCorrelationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetLogClientIp">ResetLogClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOperationNameFormat">ResetOperationNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetSamplingPercentage">ResetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetVerbosity">ResetVerbosity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackendRequest` <a name="PutBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest"></a>

```csharp
private void PutBackendRequest(ApiManagementApiDiagnosticBackendRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---

##### `PutBackendResponse` <a name="PutBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse"></a>

```csharp
private void PutBackendResponse(ApiManagementApiDiagnosticBackendResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---

##### `PutFrontendRequest` <a name="PutFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest"></a>

```csharp
private void PutFrontendRequest(ApiManagementApiDiagnosticFrontendRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---

##### `PutFrontendResponse` <a name="PutFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse"></a>

```csharp
private void PutFrontendResponse(ApiManagementApiDiagnosticFrontendResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementApiDiagnosticTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

---

##### `ResetAlwaysLogErrors` <a name="ResetAlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetAlwaysLogErrors"></a>

```csharp
private void ResetAlwaysLogErrors()
```

##### `ResetBackendRequest` <a name="ResetBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendRequest"></a>

```csharp
private void ResetBackendRequest()
```

##### `ResetBackendResponse` <a name="ResetBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendResponse"></a>

```csharp
private void ResetBackendResponse()
```

##### `ResetFrontendRequest` <a name="ResetFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendRequest"></a>

```csharp
private void ResetFrontendRequest()
```

##### `ResetFrontendResponse` <a name="ResetFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendResponse"></a>

```csharp
private void ResetFrontendResponse()
```

##### `ResetHttpCorrelationProtocol` <a name="ResetHttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetHttpCorrelationProtocol"></a>

```csharp
private void ResetHttpCorrelationProtocol()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogClientIp` <a name="ResetLogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetLogClientIp"></a>

```csharp
private void ResetLogClientIp()
```

##### `ResetOperationNameFormat` <a name="ResetOperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOperationNameFormat"></a>

```csharp
private void ResetOperationNameFormat()
```

##### `ResetSamplingPercentage` <a name="ResetSamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetSamplingPercentage"></a>

```csharp
private void ResetSamplingPercentage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVerbosity` <a name="ResetVerbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetVerbosity"></a>

```csharp
private void ResetVerbosity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiDiagnostic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApiDiagnostic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApiDiagnostic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApiDiagnostic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApiDiagnostic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagementApiDiagnostic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementApiDiagnostic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementApiDiagnostic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiDiagnostic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequest">BackendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference">ApiManagementApiDiagnosticBackendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponse">BackendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference">ApiManagementApiDiagnosticBackendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequest">FrontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference">ApiManagementApiDiagnosticFrontendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponse">FrontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference">ApiManagementApiDiagnosticFrontendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference">ApiManagementApiDiagnosticTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrorsInput">AlwaysLogErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerIdInput">ApiManagementLoggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiNameInput">ApiNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequestInput">BackendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponseInput">BackendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequestInput">FrontendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponseInput">FrontendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocolInput">HttpCorrelationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIpInput">LogClientIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormatInput">OperationNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosityInput">VerbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrors">AlwaysLogErrors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerId">ApiManagementLoggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiName">ApiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocol">HttpCorrelationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIp">LogClientIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormat">OperationNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosity">Verbosity</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendRequest`<sup>Required</sup> <a name="BackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequest"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestOutputReference BackendRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference">ApiManagementApiDiagnosticBackendRequestOutputReference</a>

---

##### `BackendResponse`<sup>Required</sup> <a name="BackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponse"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseOutputReference BackendResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference">ApiManagementApiDiagnosticBackendResponseOutputReference</a>

---

##### `FrontendRequest`<sup>Required</sup> <a name="FrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequest"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestOutputReference FrontendRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference">ApiManagementApiDiagnosticFrontendRequestOutputReference</a>

---

##### `FrontendResponse`<sup>Required</sup> <a name="FrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponse"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseOutputReference FrontendResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference">ApiManagementApiDiagnosticFrontendResponseOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeouts"></a>

```csharp
public ApiManagementApiDiagnosticTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference">ApiManagementApiDiagnosticTimeoutsOutputReference</a>

---

##### `AlwaysLogErrorsInput`<sup>Optional</sup> <a name="AlwaysLogErrorsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrorsInput"></a>

```csharp
public object AlwaysLogErrorsInput { get; }
```

- *Type:* object

---

##### `ApiManagementLoggerIdInput`<sup>Optional</sup> <a name="ApiManagementLoggerIdInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerIdInput"></a>

```csharp
public string ApiManagementLoggerIdInput { get; }
```

- *Type:* string

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `ApiNameInput`<sup>Optional</sup> <a name="ApiNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiNameInput"></a>

```csharp
public string ApiNameInput { get; }
```

- *Type:* string

---

##### `BackendRequestInput`<sup>Optional</sup> <a name="BackendRequestInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequestInput"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequest BackendRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---

##### `BackendResponseInput`<sup>Optional</sup> <a name="BackendResponseInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponseInput"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponse BackendResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---

##### `FrontendRequestInput`<sup>Optional</sup> <a name="FrontendRequestInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequestInput"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequest FrontendRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---

##### `FrontendResponseInput`<sup>Optional</sup> <a name="FrontendResponseInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponseInput"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponse FrontendResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---

##### `HttpCorrelationProtocolInput`<sup>Optional</sup> <a name="HttpCorrelationProtocolInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocolInput"></a>

```csharp
public string HttpCorrelationProtocolInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogClientIpInput`<sup>Optional</sup> <a name="LogClientIpInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIpInput"></a>

```csharp
public object LogClientIpInput { get; }
```

- *Type:* object

---

##### `OperationNameFormatInput`<sup>Optional</sup> <a name="OperationNameFormatInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormatInput"></a>

```csharp
public string OperationNameFormatInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentageInput"></a>

```csharp
public double SamplingPercentageInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VerbosityInput`<sup>Optional</sup> <a name="VerbosityInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosityInput"></a>

```csharp
public string VerbosityInput { get; }
```

- *Type:* string

---

##### `AlwaysLogErrors`<sup>Required</sup> <a name="AlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrors"></a>

```csharp
public object AlwaysLogErrors { get; }
```

- *Type:* object

---

##### `ApiManagementLoggerId`<sup>Required</sup> <a name="ApiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerId"></a>

```csharp
public string ApiManagementLoggerId { get; }
```

- *Type:* string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiName"></a>

```csharp
public string ApiName { get; }
```

- *Type:* string

---

##### `HttpCorrelationProtocol`<sup>Required</sup> <a name="HttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocol"></a>

```csharp
public string HttpCorrelationProtocol { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `LogClientIp`<sup>Required</sup> <a name="LogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIp"></a>

```csharp
public object LogClientIp { get; }
```

- *Type:* object

---

##### `OperationNameFormat`<sup>Required</sup> <a name="OperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormat"></a>

```csharp
public string OperationNameFormat { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; }
```

- *Type:* double

---

##### `Verbosity`<sup>Required</sup> <a name="Verbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosity"></a>

```csharp
public string Verbosity { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiDiagnosticBackendRequest <a name="ApiManagementApiDiagnosticBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequest {
    double BodyBytes = null,
    ApiManagementApiDiagnosticBackendRequestDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticBackendRequestDataMasking <a name="ApiManagementApiDiagnosticBackendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendResponse <a name="ApiManagementApiDiagnosticBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponse {
    double BodyBytes = null,
    ApiManagementApiDiagnosticBackendResponseDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticBackendResponseDataMasking <a name="ApiManagementApiDiagnosticBackendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticConfig <a name="ApiManagementApiDiagnosticConfig" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiManagementLoggerId,
    string ApiManagementName,
    string ApiName,
    string Identifier,
    string ResourceGroupName,
    object AlwaysLogErrors = null,
    ApiManagementApiDiagnosticBackendRequest BackendRequest = null,
    ApiManagementApiDiagnosticBackendResponse BackendResponse = null,
    ApiManagementApiDiagnosticFrontendRequest FrontendRequest = null,
    ApiManagementApiDiagnosticFrontendResponse FrontendResponse = null,
    string HttpCorrelationProtocol = null,
    string Id = null,
    object LogClientIp = null,
    string OperationNameFormat = null,
    double SamplingPercentage = null,
    ApiManagementApiDiagnosticTimeouts Timeouts = null,
    string Verbosity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementLoggerId">ApiManagementLoggerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiName">ApiName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.alwaysLogErrors">AlwaysLogErrors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendRequest">BackendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendResponse">BackendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendRequest">FrontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendResponse">FrontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.httpCorrelationProtocol">HttpCorrelationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.logClientIp">LogClientIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.operationNameFormat">OperationNameFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.verbosity">Verbosity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiManagementLoggerId`<sup>Required</sup> <a name="ApiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementLoggerId"></a>

```csharp
public string ApiManagementLoggerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}.

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}.

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiName"></a>

```csharp
public string ApiName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}.

---

##### `AlwaysLogErrors`<sup>Optional</sup> <a name="AlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.alwaysLogErrors"></a>

```csharp
public object AlwaysLogErrors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}.

---

##### `BackendRequest`<sup>Optional</sup> <a name="BackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendRequest"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequest BackendRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#backend_request ApiManagementApiDiagnostic#backend_request}

---

##### `BackendResponse`<sup>Optional</sup> <a name="BackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendResponse"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponse BackendResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#backend_response ApiManagementApiDiagnostic#backend_response}

---

##### `FrontendRequest`<sup>Optional</sup> <a name="FrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendRequest"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequest FrontendRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#frontend_request ApiManagementApiDiagnostic#frontend_request}

---

##### `FrontendResponse`<sup>Optional</sup> <a name="FrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendResponse"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponse FrontendResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#frontend_response ApiManagementApiDiagnostic#frontend_response}

---

##### `HttpCorrelationProtocol`<sup>Optional</sup> <a name="HttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.httpCorrelationProtocol"></a>

```csharp
public string HttpCorrelationProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogClientIp`<sup>Optional</sup> <a name="LogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.logClientIp"></a>

```csharp
public object LogClientIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}.

---

##### `OperationNameFormat`<sup>Optional</sup> <a name="OperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.operationNameFormat"></a>

```csharp
public string OperationNameFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}.

---

##### `SamplingPercentage`<sup>Optional</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.timeouts"></a>

```csharp
public ApiManagementApiDiagnosticTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#timeouts ApiManagementApiDiagnostic#timeouts}

---

##### `Verbosity`<sup>Optional</sup> <a name="Verbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.verbosity"></a>

```csharp
public string Verbosity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}.

---

### ApiManagementApiDiagnosticFrontendRequest <a name="ApiManagementApiDiagnosticFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequest {
    double BodyBytes = null,
    ApiManagementApiDiagnosticFrontendRequestDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticFrontendRequestDataMasking <a name="ApiManagementApiDiagnosticFrontendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendResponse <a name="ApiManagementApiDiagnosticFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponse {
    double BodyBytes = null,
    ApiManagementApiDiagnosticFrontendResponseDataMasking DataMasking = null,
    string[] HeadersToLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseDataMasking DataMasking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticFrontendResponseDataMasking <a name="ApiManagementApiDiagnosticFrontendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMasking {
    object Headers = null,
    object QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.queryParams">QueryParams</a></code> | <code>object</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.queryParams"></a>

```csharp
public object QueryParams { get; set; }
```

- *Type:* object

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams {
    string Mode,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticTimeouts <a name="ApiManagementApiDiagnosticTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendRequestOutputReference <a name="ApiManagementApiDiagnosticBackendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementApiDiagnosticBackendRequestDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequestDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticBackendRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticBackendResponseOutputReference <a name="ApiManagementApiDiagnosticBackendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticBackendResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementApiDiagnosticBackendResponseDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponseDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticBackendResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendRequestOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementApiDiagnosticFrontendRequestDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequestDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticFrontendRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get"></a>

```csharp
private ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams"></a>

```csharp
private void PutQueryParams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headers"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList QueryParams { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```csharp
public object QueryParamsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseDataMasking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get"></a>

```csharp
private ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementApiDiagnosticFrontendResponseOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticFrontendResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking"></a>

```csharp
private void PutDataMasking(ApiManagementApiDiagnosticFrontendResponseDataMasking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetBodyBytes"></a>

```csharp
private void ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetDataMasking"></a>

```csharp
private void ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetHeadersToLog"></a>

```csharp
private void ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMasking"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference DataMasking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytesInput"></a>

```csharp
public double BodyBytesInput { get; }
```

- *Type:* double

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMaskingInput"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponseDataMasking DataMaskingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLogInput"></a>

```csharp
public string[] HeadersToLogInput { get; }
```

- *Type:* string[]

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytes"></a>

```csharp
public double BodyBytes { get; }
```

- *Type:* double

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLog"></a>

```csharp
public string[] HeadersToLog { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiDiagnosticFrontendResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---


### ApiManagementApiDiagnosticTimeoutsOutputReference <a name="ApiManagementApiDiagnosticTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiDiagnosticTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



