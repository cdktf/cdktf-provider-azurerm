# `apiManagementApi` Submodule <a name="`apiManagementApi` Submodule" id="@cdktf/provider-azurerm.apiManagementApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApi <a name="ApiManagementApi" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api azurerm_api_management_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApi(Construct Scope, string Id, ApiManagementApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig">ApiManagementApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig">ApiManagementApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact">PutContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport">PutImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense">PutLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization">PutOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication">PutOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames">PutSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetApiType">ResetApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetContact">ResetContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetImport">ResetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetLicense">ResetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOauth2Authorization">ResetOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOpenidAuthentication">ResetOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetRevisionDescription">ResetRevisionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetServiceUrl">ResetServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSourceApiId">ResetSourceApiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionKeyParameterNames">ResetSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionRequired">ResetSubscriptionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTermsOfServiceUrl">ResetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionSetId">ResetVersionSetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContact` <a name="PutContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact"></a>

```csharp
private void PutContact(ApiManagementApiContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---

##### `PutImport` <a name="PutImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport"></a>

```csharp
private void PutImport(ApiManagementApiImport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---

##### `PutLicense` <a name="PutLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense"></a>

```csharp
private void PutLicense(ApiManagementApiLicense Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---

##### `PutOauth2Authorization` <a name="PutOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization"></a>

```csharp
private void PutOauth2Authorization(ApiManagementApiOauth2Authorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---

##### `PutOpenidAuthentication` <a name="PutOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication"></a>

```csharp
private void PutOpenidAuthentication(ApiManagementApiOpenidAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---

##### `PutSubscriptionKeyParameterNames` <a name="PutSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames"></a>

```csharp
private void PutSubscriptionKeyParameterNames(ApiManagementApiSubscriptionKeyParameterNames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementApiTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

---

##### `ResetApiType` <a name="ResetApiType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetApiType"></a>

```csharp
private void ResetApiType()
```

##### `ResetContact` <a name="ResetContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetContact"></a>

```csharp
private void ResetContact()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImport` <a name="ResetImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetImport"></a>

```csharp
private void ResetImport()
```

##### `ResetLicense` <a name="ResetLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetLicense"></a>

```csharp
private void ResetLicense()
```

##### `ResetOauth2Authorization` <a name="ResetOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOauth2Authorization"></a>

```csharp
private void ResetOauth2Authorization()
```

##### `ResetOpenidAuthentication` <a name="ResetOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOpenidAuthentication"></a>

```csharp
private void ResetOpenidAuthentication()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetRevisionDescription` <a name="ResetRevisionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetRevisionDescription"></a>

```csharp
private void ResetRevisionDescription()
```

##### `ResetServiceUrl` <a name="ResetServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetServiceUrl"></a>

```csharp
private void ResetServiceUrl()
```

##### `ResetSourceApiId` <a name="ResetSourceApiId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSourceApiId"></a>

```csharp
private void ResetSourceApiId()
```

##### `ResetSubscriptionKeyParameterNames` <a name="ResetSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionKeyParameterNames"></a>

```csharp
private void ResetSubscriptionKeyParameterNames()
```

##### `ResetSubscriptionRequired` <a name="ResetSubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionRequired"></a>

```csharp
private void ResetSubscriptionRequired()
```

##### `ResetTermsOfServiceUrl` <a name="ResetTermsOfServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTermsOfServiceUrl"></a>

```csharp
private void ResetTermsOfServiceUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionDescription"></a>

```csharp
private void ResetVersionDescription()
```

##### `ResetVersionSetId` <a name="ResetVersionSetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionSetId"></a>

```csharp
private void ResetVersionSetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference">ApiManagementApiContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.import">Import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference">ApiManagementApiImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isCurrent">IsCurrent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isOnline">IsOnline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.license">License</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference">ApiManagementApiLicenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2Authorization">Oauth2Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference">ApiManagementApiOauth2AuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthentication">OpenidAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference">ApiManagementApiOpenidAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNames">SubscriptionKeyParameterNames</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference">ApiManagementApiSubscriptionKeyParameterNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference">ApiManagementApiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiTypeInput">ApiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contactInput">ContactInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.importInput">ImportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.licenseInput">LicenseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2AuthorizationInput">Oauth2AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthenticationInput">OpenidAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescriptionInput">RevisionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrlInput">ServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiIdInput">SourceApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNamesInput">SubscriptionKeyParameterNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequiredInput">SubscriptionRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrlInput">TermsOfServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetIdInput">VersionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescription">RevisionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrl">ServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiId">SourceApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequired">SubscriptionRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetId">VersionSetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contact"></a>

```csharp
public ApiManagementApiContactOutputReference Contact { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference">ApiManagementApiContactOutputReference</a>

---

##### `Import`<sup>Required</sup> <a name="Import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.import"></a>

```csharp
public ApiManagementApiImportOutputReference Import { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference">ApiManagementApiImportOutputReference</a>

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isCurrent"></a>

```csharp
public IResolvable IsCurrent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOnline`<sup>Required</sup> <a name="IsOnline" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isOnline"></a>

```csharp
public IResolvable IsOnline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `License`<sup>Required</sup> <a name="License" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.license"></a>

```csharp
public ApiManagementApiLicenseOutputReference License { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference">ApiManagementApiLicenseOutputReference</a>

---

##### `Oauth2Authorization`<sup>Required</sup> <a name="Oauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2Authorization"></a>

```csharp
public ApiManagementApiOauth2AuthorizationOutputReference Oauth2Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference">ApiManagementApiOauth2AuthorizationOutputReference</a>

---

##### `OpenidAuthentication`<sup>Required</sup> <a name="OpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthentication"></a>

```csharp
public ApiManagementApiOpenidAuthenticationOutputReference OpenidAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference">ApiManagementApiOpenidAuthenticationOutputReference</a>

---

##### `SubscriptionKeyParameterNames`<sup>Required</sup> <a name="SubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNames"></a>

```csharp
public ApiManagementApiSubscriptionKeyParameterNamesOutputReference SubscriptionKeyParameterNames { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference">ApiManagementApiSubscriptionKeyParameterNamesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeouts"></a>

```csharp
public ApiManagementApiTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference">ApiManagementApiTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `ApiTypeInput`<sup>Optional</sup> <a name="ApiTypeInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiTypeInput"></a>

```csharp
public string ApiTypeInput { get; }
```

- *Type:* string

---

##### `ContactInput`<sup>Optional</sup> <a name="ContactInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contactInput"></a>

```csharp
public ApiManagementApiContact ContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportInput`<sup>Optional</sup> <a name="ImportInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.importInput"></a>

```csharp
public ApiManagementApiImport ImportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.licenseInput"></a>

```csharp
public ApiManagementApiLicense LicenseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Oauth2AuthorizationInput`<sup>Optional</sup> <a name="Oauth2AuthorizationInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2AuthorizationInput"></a>

```csharp
public ApiManagementApiOauth2Authorization Oauth2AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---

##### `OpenidAuthenticationInput`<sup>Optional</sup> <a name="OpenidAuthenticationInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthenticationInput"></a>

```csharp
public ApiManagementApiOpenidAuthentication OpenidAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RevisionDescriptionInput`<sup>Optional</sup> <a name="RevisionDescriptionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescriptionInput"></a>

```csharp
public string RevisionDescriptionInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `ServiceUrlInput`<sup>Optional</sup> <a name="ServiceUrlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrlInput"></a>

```csharp
public string ServiceUrlInput { get; }
```

- *Type:* string

---

##### `SourceApiIdInput`<sup>Optional</sup> <a name="SourceApiIdInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiIdInput"></a>

```csharp
public string SourceApiIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionKeyParameterNamesInput`<sup>Optional</sup> <a name="SubscriptionKeyParameterNamesInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNamesInput"></a>

```csharp
public ApiManagementApiSubscriptionKeyParameterNames SubscriptionKeyParameterNamesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---

##### `SubscriptionRequiredInput`<sup>Optional</sup> <a name="SubscriptionRequiredInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequiredInput"></a>

```csharp
public object SubscriptionRequiredInput { get; }
```

- *Type:* object

---

##### `TermsOfServiceUrlInput`<sup>Optional</sup> <a name="TermsOfServiceUrlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrlInput"></a>

```csharp
public string TermsOfServiceUrlInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescriptionInput"></a>

```csharp
public string VersionDescriptionInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VersionSetIdInput`<sup>Optional</sup> <a name="VersionSetIdInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetIdInput"></a>

```csharp
public string VersionSetIdInput { get; }
```

- *Type:* string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `RevisionDescription`<sup>Required</sup> <a name="RevisionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescription"></a>

```csharp
public string RevisionDescription { get; }
```

- *Type:* string

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrl"></a>

```csharp
public string ServiceUrl { get; }
```

- *Type:* string

---

##### `SourceApiId`<sup>Required</sup> <a name="SourceApiId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiId"></a>

```csharp
public string SourceApiId { get; }
```

- *Type:* string

---

##### `SubscriptionRequired`<sup>Required</sup> <a name="SubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequired"></a>

```csharp
public object SubscriptionRequired { get; }
```

- *Type:* object

---

##### `TermsOfServiceUrl`<sup>Required</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrl"></a>

```csharp
public string TermsOfServiceUrl { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

##### `VersionSetId`<sup>Required</sup> <a name="VersionSetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetId"></a>

```csharp
public string VersionSetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiConfig <a name="ApiManagementApiConfig" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiManagementName,
    string Name,
    string ResourceGroupName,
    string Revision,
    string ApiType = null,
    ApiManagementApiContact Contact = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    ApiManagementApiImport Import = null,
    ApiManagementApiLicense License = null,
    ApiManagementApiOauth2Authorization Oauth2Authorization = null,
    ApiManagementApiOpenidAuthentication OpenidAuthentication = null,
    string Path = null,
    string[] Protocols = null,
    string RevisionDescription = null,
    string ServiceUrl = null,
    string SourceApiId = null,
    ApiManagementApiSubscriptionKeyParameterNames SubscriptionKeyParameterNames = null,
    object SubscriptionRequired = null,
    string TermsOfServiceUrl = null,
    ApiManagementApiTimeouts Timeouts = null,
    string Version = null,
    string VersionDescription = null,
    string VersionSetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revision">Revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#revision ApiManagementApi#revision}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiType">ApiType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#description ApiManagementApi#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#id ApiManagementApi#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.import">Import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.license">License</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | license block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.oauth2Authorization">Oauth2Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | oauth2_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.openidAuthentication">OpenidAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | openid_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#path ApiManagementApi#path}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revisionDescription">RevisionDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.serviceUrl">ServiceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.sourceApiId">SourceApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionKeyParameterNames">SubscriptionKeyParameterNames</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | subscription_key_parameter_names block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionRequired">SubscriptionRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#version ApiManagementApi#version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionDescription">VersionDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionSetId">VersionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#revision ApiManagementApi#revision}.

---

##### `ApiType`<sup>Optional</sup> <a name="ApiType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiType"></a>

```csharp
public string ApiType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}.

---

##### `Contact`<sup>Optional</sup> <a name="Contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.contact"></a>

```csharp
public ApiManagementApiContact Contact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#contact ApiManagementApi#contact}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#description ApiManagementApi#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#id ApiManagementApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Import`<sup>Optional</sup> <a name="Import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.import"></a>

```csharp
public ApiManagementApiImport Import { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#import ApiManagementApi#import}

---

##### `License`<sup>Optional</sup> <a name="License" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.license"></a>

```csharp
public ApiManagementApiLicense License { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#license ApiManagementApi#license}

---

##### `Oauth2Authorization`<sup>Optional</sup> <a name="Oauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.oauth2Authorization"></a>

```csharp
public ApiManagementApiOauth2Authorization Oauth2Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

oauth2_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#oauth2_authorization ApiManagementApi#oauth2_authorization}

---

##### `OpenidAuthentication`<sup>Optional</sup> <a name="OpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.openidAuthentication"></a>

```csharp
public ApiManagementApiOpenidAuthentication OpenidAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

openid_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#openid_authentication ApiManagementApi#openid_authentication}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#path ApiManagementApi#path}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}.

---

##### `RevisionDescription`<sup>Optional</sup> <a name="RevisionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revisionDescription"></a>

```csharp
public string RevisionDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}.

---

##### `ServiceUrl`<sup>Optional</sup> <a name="ServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.serviceUrl"></a>

```csharp
public string ServiceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}.

---

##### `SourceApiId`<sup>Optional</sup> <a name="SourceApiId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.sourceApiId"></a>

```csharp
public string SourceApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}.

---

##### `SubscriptionKeyParameterNames`<sup>Optional</sup> <a name="SubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionKeyParameterNames"></a>

```csharp
public ApiManagementApiSubscriptionKeyParameterNames SubscriptionKeyParameterNames { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

subscription_key_parameter_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#subscription_key_parameter_names ApiManagementApi#subscription_key_parameter_names}

---

##### `SubscriptionRequired`<sup>Optional</sup> <a name="SubscriptionRequired" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionRequired"></a>

```csharp
public object SubscriptionRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}.

---

##### `TermsOfServiceUrl`<sup>Optional</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.termsOfServiceUrl"></a>

```csharp
public string TermsOfServiceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.timeouts"></a>

```csharp
public ApiManagementApiTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#timeouts ApiManagementApi#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#version ApiManagementApi#version}.

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionDescription"></a>

```csharp
public string VersionDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}.

---

##### `VersionSetId`<sup>Optional</sup> <a name="VersionSetId" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionSetId"></a>

```csharp
public string VersionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}.

---

### ApiManagementApiContact <a name="ApiManagementApiContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiContact {
    string Email = null,
    string Name = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#email ApiManagementApi#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#url ApiManagementApi#url}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#email ApiManagementApi#email}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

### ApiManagementApiImport <a name="ApiManagementApiImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiImport {
    string ContentFormat,
    string ContentValue,
    ApiManagementApiImportWsdlSelector WsdlSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentFormat">ContentFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentValue">ContentValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.wsdlSelector">WsdlSelector</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | wsdl_selector block. |

---

##### `ContentFormat`<sup>Required</sup> <a name="ContentFormat" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentFormat"></a>

```csharp
public string ContentFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}.

---

##### `ContentValue`<sup>Required</sup> <a name="ContentValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentValue"></a>

```csharp
public string ContentValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}.

---

##### `WsdlSelector`<sup>Optional</sup> <a name="WsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.wsdlSelector"></a>

```csharp
public ApiManagementApiImportWsdlSelector WsdlSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

wsdl_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#wsdl_selector ApiManagementApi#wsdl_selector}

---

### ApiManagementApiImportWsdlSelector <a name="ApiManagementApiImportWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiImportWsdlSelector {
    string EndpointName,
    string ServiceName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}. |

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}.

---

### ApiManagementApiLicense <a name="ApiManagementApiLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiLicense {
    string Name = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#url ApiManagementApi#url}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

### ApiManagementApiOauth2Authorization <a name="ApiManagementApiOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiOauth2Authorization {
    string AuthorizationServerName,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.authorizationServerName">AuthorizationServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#scope ApiManagementApi#scope}. |

---

##### `AuthorizationServerName`<sup>Required</sup> <a name="AuthorizationServerName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.authorizationServerName"></a>

```csharp
public string AuthorizationServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#scope ApiManagementApi#scope}.

---

### ApiManagementApiOpenidAuthentication <a name="ApiManagementApiOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiOpenidAuthentication {
    string OpenidProviderName,
    string[] BearerTokenSendingMethods = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.openidProviderName">OpenidProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.bearerTokenSendingMethods">BearerTokenSendingMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}. |

---

##### `OpenidProviderName`<sup>Required</sup> <a name="OpenidProviderName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.openidProviderName"></a>

```csharp
public string OpenidProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}.

---

##### `BearerTokenSendingMethods`<sup>Optional</sup> <a name="BearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.bearerTokenSendingMethods"></a>

```csharp
public string[] BearerTokenSendingMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}.

---

### ApiManagementApiSubscriptionKeyParameterNames <a name="ApiManagementApiSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiSubscriptionKeyParameterNames {
    string Header,
    string Query
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.header">Header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#header ApiManagementApi#header}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#query ApiManagementApi#query}. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.header"></a>

```csharp
public string Header { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#header ApiManagementApi#header}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#query ApiManagementApi#query}.

---

### ApiManagementApiTimeouts <a name="ApiManagementApiTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#create ApiManagementApi#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#delete ApiManagementApi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#read ApiManagementApi#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#update ApiManagementApi#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#create ApiManagementApi#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#delete ApiManagementApi#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#read ApiManagementApi#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/api_management_api#update ApiManagementApi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiContactOutputReference <a name="ApiManagementApiContactOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---


### ApiManagementApiImportOutputReference <a name="ApiManagementApiImportOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiImportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector">PutWsdlSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resetWsdlSelector">ResetWsdlSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWsdlSelector` <a name="PutWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector"></a>

```csharp
private void PutWsdlSelector(ApiManagementApiImportWsdlSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---

##### `ResetWsdlSelector` <a name="ResetWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resetWsdlSelector"></a>

```csharp
private void ResetWsdlSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelector">WsdlSelector</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference">ApiManagementApiImportWsdlSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormatInput">ContentFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValueInput">ContentValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelectorInput">WsdlSelectorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormat">ContentFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValue">ContentValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WsdlSelector`<sup>Required</sup> <a name="WsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelector"></a>

```csharp
public ApiManagementApiImportWsdlSelectorOutputReference WsdlSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference">ApiManagementApiImportWsdlSelectorOutputReference</a>

---

##### `ContentFormatInput`<sup>Optional</sup> <a name="ContentFormatInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormatInput"></a>

```csharp
public string ContentFormatInput { get; }
```

- *Type:* string

---

##### `ContentValueInput`<sup>Optional</sup> <a name="ContentValueInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValueInput"></a>

```csharp
public string ContentValueInput { get; }
```

- *Type:* string

---

##### `WsdlSelectorInput`<sup>Optional</sup> <a name="WsdlSelectorInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelectorInput"></a>

```csharp
public ApiManagementApiImportWsdlSelector WsdlSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---

##### `ContentFormat`<sup>Required</sup> <a name="ContentFormat" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormat"></a>

```csharp
public string ContentFormat { get; }
```

- *Type:* string

---

##### `ContentValue`<sup>Required</sup> <a name="ContentValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValue"></a>

```csharp
public string ContentValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiImport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---


### ApiManagementApiImportWsdlSelectorOutputReference <a name="ApiManagementApiImportWsdlSelectorOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiImportWsdlSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiImportWsdlSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---


### ApiManagementApiLicenseOutputReference <a name="ApiManagementApiLicenseOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiLicenseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiLicense InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---


### ApiManagementApiOauth2AuthorizationOutputReference <a name="ApiManagementApiOauth2AuthorizationOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiOauth2AuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerNameInput">AuthorizationServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerName">AuthorizationServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerNameInput`<sup>Optional</sup> <a name="AuthorizationServerNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerNameInput"></a>

```csharp
public string AuthorizationServerNameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `AuthorizationServerName`<sup>Required</sup> <a name="AuthorizationServerName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerName"></a>

```csharp
public string AuthorizationServerName { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiOauth2Authorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---


### ApiManagementApiOpenidAuthenticationOutputReference <a name="ApiManagementApiOpenidAuthenticationOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiOpenidAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resetBearerTokenSendingMethods">ResetBearerTokenSendingMethods</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBearerTokenSendingMethods` <a name="ResetBearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resetBearerTokenSendingMethods"></a>

```csharp
private void ResetBearerTokenSendingMethods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethodsInput">BearerTokenSendingMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderNameInput">OpenidProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethods">BearerTokenSendingMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderName">OpenidProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BearerTokenSendingMethodsInput`<sup>Optional</sup> <a name="BearerTokenSendingMethodsInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethodsInput"></a>

```csharp
public string[] BearerTokenSendingMethodsInput { get; }
```

- *Type:* string[]

---

##### `OpenidProviderNameInput`<sup>Optional</sup> <a name="OpenidProviderNameInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderNameInput"></a>

```csharp
public string OpenidProviderNameInput { get; }
```

- *Type:* string

---

##### `BearerTokenSendingMethods`<sup>Required</sup> <a name="BearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethods"></a>

```csharp
public string[] BearerTokenSendingMethods { get; }
```

- *Type:* string[]

---

##### `OpenidProviderName`<sup>Required</sup> <a name="OpenidProviderName" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderName"></a>

```csharp
public string OpenidProviderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiOpenidAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---


### ApiManagementApiSubscriptionKeyParameterNamesOutputReference <a name="ApiManagementApiSubscriptionKeyParameterNamesOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiSubscriptionKeyParameterNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.headerInput">HeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.headerInput"></a>

```csharp
public string HeaderInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.internalValue"></a>

```csharp
public ApiManagementApiSubscriptionKeyParameterNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---


### ApiManagementApiTimeoutsOutputReference <a name="ApiManagementApiTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementApiTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



