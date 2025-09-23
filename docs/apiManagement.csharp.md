# `apiManagement` Submodule <a name="`apiManagement` Submodule" id="@cdktf/provider-azurerm.apiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagement <a name="ApiManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management azurerm_api_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagement(Construct Scope, string Id, ApiManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig">ApiManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig">ApiManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation">PutAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation">PutDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration">PutHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols">PutProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn">PutSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp">PutSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess">PutTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration">PutVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation">ResetAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled">ResetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation">ResetDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled">ResetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration">ResetHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion">ResetMinApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail">ResetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId">ResetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn">ResetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp">ResetSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess">ResetTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration">ResetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType">ResetVirtualNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalLocation` <a name="PutAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation"></a>

```csharp
private void PutAdditionalLocation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation.parameter.value"></a>

- *Type:* object

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate.parameter.value"></a>

- *Type:* object

---

##### `PutDelegation` <a name="PutDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation"></a>

```csharp
private void PutDelegation(ApiManagementDelegation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `PutHostnameConfiguration` <a name="PutHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration"></a>

```csharp
private void PutHostnameConfiguration(ApiManagementHostnameConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity"></a>

```csharp
private void PutIdentity(ApiManagementIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `PutProtocols` <a name="PutProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols"></a>

```csharp
private void PutProtocols(ApiManagementProtocols Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity"></a>

```csharp
private void PutSecurity(ApiManagementSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `PutSignIn` <a name="PutSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn"></a>

```csharp
private void PutSignIn(ApiManagementSignIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `PutSignUp` <a name="PutSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp"></a>

```csharp
private void PutSignUp(ApiManagementSignUp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `PutTenantAccess` <a name="PutTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess"></a>

```csharp
private void PutTenantAccess(ApiManagementTenantAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

---

##### `PutVirtualNetworkConfiguration` <a name="PutVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration"></a>

```csharp
private void PutVirtualNetworkConfiguration(ApiManagementVirtualNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `ResetAdditionalLocation` <a name="ResetAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation"></a>

```csharp
private void ResetAdditionalLocation()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientCertificateEnabled` <a name="ResetClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled"></a>

```csharp
private void ResetClientCertificateEnabled()
```

##### `ResetDelegation` <a name="ResetDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation"></a>

```csharp
private void ResetDelegation()
```

##### `ResetGatewayDisabled` <a name="ResetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled"></a>

```csharp
private void ResetGatewayDisabled()
```

##### `ResetHostnameConfiguration` <a name="ResetHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration"></a>

```csharp
private void ResetHostnameConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetMinApiVersion` <a name="ResetMinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion"></a>

```csharp
private void ResetMinApiVersion()
```

##### `ResetNotificationSenderEmail` <a name="ResetNotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail"></a>

```csharp
private void ResetNotificationSenderEmail()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetPublicIpAddressId` <a name="ResetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId"></a>

```csharp
private void ResetPublicIpAddressId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity"></a>

```csharp
private void ResetSecurity()
```

##### `ResetSignIn` <a name="ResetSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn"></a>

```csharp
private void ResetSignIn()
```

##### `ResetSignUp` <a name="ResetSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp"></a>

```csharp
private void ResetSignUp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTenantAccess` <a name="ResetTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess"></a>

```csharp
private void ResetTenantAccess()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualNetworkConfiguration` <a name="ResetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration"></a>

```csharp
private void ResetVirtualNetworkConfiguration()
```

##### `ResetVirtualNetworkType` <a name="ResetVirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType"></a>

```csharp
private void ResetVirtualNetworkType()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation">AdditionalLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation">Delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl">DeveloperPortalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl">GatewayRegionalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl">GatewayUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration">HostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl">ManagementApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl">PortalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols">Protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl">ScmUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp">SignUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess">TenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput">AdditionalLocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput">ClientCertificateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput">DelegationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput">GatewayDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput">HostnameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput">MinApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput">NotificationSenderEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput">ProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput">PublicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput">PublisherEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput">PublisherNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput">SignInInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput">SignUpInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput">TenantAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput">VirtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput">VirtualNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled">GatewayDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion">MinApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail">PublisherEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName">PublisherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType">VirtualNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalLocation`<sup>Required</sup> <a name="AdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation"></a>

```csharp
public ApiManagementAdditionalLocationList AdditionalLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate"></a>

```csharp
public ApiManagementCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a>

---

##### `Delegation`<sup>Required</sup> <a name="Delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation"></a>

```csharp
public ApiManagementDelegationOutputReference Delegation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a>

---

##### `DeveloperPortalUrl`<sup>Required</sup> <a name="DeveloperPortalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl"></a>

```csharp
public string DeveloperPortalUrl { get; }
```

- *Type:* string

---

##### `GatewayRegionalUrl`<sup>Required</sup> <a name="GatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl"></a>

```csharp
public string GatewayRegionalUrl { get; }
```

- *Type:* string

---

##### `GatewayUrl`<sup>Required</sup> <a name="GatewayUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl"></a>

```csharp
public string GatewayUrl { get; }
```

- *Type:* string

---

##### `HostnameConfiguration`<sup>Required</sup> <a name="HostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration"></a>

```csharp
public ApiManagementHostnameConfigurationOutputReference HostnameConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity"></a>

```csharp
public ApiManagementIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a>

---

##### `ManagementApiUrl`<sup>Required</sup> <a name="ManagementApiUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl"></a>

```csharp
public string ManagementApiUrl { get; }
```

- *Type:* string

---

##### `PortalUrl`<sup>Required</sup> <a name="PortalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl"></a>

```csharp
public string PortalUrl { get; }
```

- *Type:* string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses"></a>

```csharp
public string[] PrivateIpAddresses { get; }
```

- *Type:* string[]

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols"></a>

```csharp
public ApiManagementProtocolsOutputReference Protocols { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a>

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses"></a>

```csharp
public string[] PublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `ScmUrl`<sup>Required</sup> <a name="ScmUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl"></a>

```csharp
public string ScmUrl { get; }
```

- *Type:* string

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security"></a>

```csharp
public ApiManagementSecurityOutputReference Security { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a>

---

##### `SignIn`<sup>Required</sup> <a name="SignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn"></a>

```csharp
public ApiManagementSignInOutputReference SignIn { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a>

---

##### `SignUp`<sup>Required</sup> <a name="SignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp"></a>

```csharp
public ApiManagementSignUpOutputReference SignUp { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a>

---

##### `TenantAccess`<sup>Required</sup> <a name="TenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess"></a>

```csharp
public ApiManagementTenantAccessOutputReference TenantAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts"></a>

```csharp
public ApiManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a>

---

##### `VirtualNetworkConfiguration`<sup>Required</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration"></a>

```csharp
public ApiManagementVirtualNetworkConfigurationOutputReference VirtualNetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a>

---

##### `AdditionalLocationInput`<sup>Optional</sup> <a name="AdditionalLocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput"></a>

```csharp
public object AdditionalLocationInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `ClientCertificateEnabledInput`<sup>Optional</sup> <a name="ClientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput"></a>

```csharp
public object ClientCertificateEnabledInput { get; }
```

- *Type:* object

---

##### `DelegationInput`<sup>Optional</sup> <a name="DelegationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput"></a>

```csharp
public ApiManagementDelegation DelegationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `GatewayDisabledInput`<sup>Optional</sup> <a name="GatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput"></a>

```csharp
public object GatewayDisabledInput { get; }
```

- *Type:* object

---

##### `HostnameConfigurationInput`<sup>Optional</sup> <a name="HostnameConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput"></a>

```csharp
public ApiManagementHostnameConfiguration HostnameConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput"></a>

```csharp
public ApiManagementIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinApiVersionInput`<sup>Optional</sup> <a name="MinApiVersionInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput"></a>

```csharp
public string MinApiVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationSenderEmailInput`<sup>Optional</sup> <a name="NotificationSenderEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput"></a>

```csharp
public string NotificationSenderEmailInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput"></a>

```csharp
public ApiManagementProtocols ProtocolsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `PublicIpAddressIdInput`<sup>Optional</sup> <a name="PublicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput"></a>

```csharp
public string PublicIpAddressIdInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `PublisherEmailInput`<sup>Optional</sup> <a name="PublisherEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput"></a>

```csharp
public string PublisherEmailInput { get; }
```

- *Type:* string

---

##### `PublisherNameInput`<sup>Optional</sup> <a name="PublisherNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput"></a>

```csharp
public string PublisherNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput"></a>

```csharp
public ApiManagementSecurity SecurityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `SignInInput`<sup>Optional</sup> <a name="SignInInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput"></a>

```csharp
public ApiManagementSignIn SignInInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `SignUpInput`<sup>Optional</sup> <a name="SignUpInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput"></a>

```csharp
public ApiManagementSignUp SignUpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenantAccessInput`<sup>Optional</sup> <a name="TenantAccessInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput"></a>

```csharp
public ApiManagementTenantAccess TenantAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkConfigurationInput`<sup>Optional</sup> <a name="VirtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput"></a>

```csharp
public ApiManagementVirtualNetworkConfiguration VirtualNetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `VirtualNetworkTypeInput`<sup>Optional</sup> <a name="VirtualNetworkTypeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput"></a>

```csharp
public string VirtualNetworkTypeInput { get; }
```

- *Type:* string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `ClientCertificateEnabled`<sup>Required</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled"></a>

```csharp
public object ClientCertificateEnabled { get; }
```

- *Type:* object

---

##### `GatewayDisabled`<sup>Required</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled"></a>

```csharp
public object GatewayDisabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinApiVersion`<sup>Required</sup> <a name="MinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion"></a>

```csharp
public string MinApiVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationSenderEmail`<sup>Required</sup> <a name="NotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail"></a>

```csharp
public string NotificationSenderEmail { get; }
```

- *Type:* string

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId"></a>

```csharp
public string PublicIpAddressId { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `PublisherEmail`<sup>Required</sup> <a name="PublisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail"></a>

```csharp
public string PublisherEmail { get; }
```

- *Type:* string

---

##### `PublisherName`<sup>Required</sup> <a name="PublisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName"></a>

```csharp
public string PublisherName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualNetworkType`<sup>Required</sup> <a name="VirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType"></a>

```csharp
public string VirtualNetworkType { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAdditionalLocation <a name="ApiManagementAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementAdditionalLocation {
    string Location,
    double Capacity = null,
    object GatewayDisabled = null,
    string PublicIpAddressId = null,
    ApiManagementAdditionalLocationVirtualNetworkConfiguration VirtualNetworkConfiguration = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#capacity ApiManagement#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled">GatewayDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#location ApiManagement#location}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#capacity ApiManagement#capacity}.

---

##### `GatewayDisabled`<sup>Optional</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled"></a>

```csharp
public object GatewayDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `PublicIpAddressId`<sup>Optional</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId"></a>

```csharp
public string PublicIpAddressId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `VirtualNetworkConfiguration`<sup>Optional</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration"></a>

```csharp
public ApiManagementAdditionalLocationVirtualNetworkConfiguration VirtualNetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementAdditionalLocationVirtualNetworkConfiguration <a name="ApiManagementAdditionalLocationVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementAdditionalLocationVirtualNetworkConfiguration {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

### ApiManagementCertificate <a name="ApiManagementCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementCertificate {
    string EncodedCertificate,
    string StoreName,
    string CertificatePassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate">EncodedCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName">StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#store_name ApiManagement#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |

---

##### `EncodedCertificate`<sup>Required</sup> <a name="EncodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate"></a>

```csharp
public string EncodedCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}.

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName"></a>

```csharp
public string StoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#store_name ApiManagement#store_name}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

### ApiManagementConfig <a name="ApiManagementConfig" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string PublisherEmail,
    string PublisherName,
    string ResourceGroupName,
    string SkuName,
    object AdditionalLocation = null,
    object Certificate = null,
    object ClientCertificateEnabled = null,
    ApiManagementDelegation Delegation = null,
    object GatewayDisabled = null,
    ApiManagementHostnameConfiguration HostnameConfiguration = null,
    string Id = null,
    ApiManagementIdentity Identity = null,
    string MinApiVersion = null,
    string NotificationSenderEmail = null,
    ApiManagementProtocols Protocols = null,
    string PublicIpAddressId = null,
    object PublicNetworkAccessEnabled = null,
    ApiManagementSecurity Security = null,
    ApiManagementSignIn SignIn = null,
    ApiManagementSignUp SignUp = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ApiManagementTenantAccess TenantAccess = null,
    ApiManagementTimeouts Timeouts = null,
    ApiManagementVirtualNetworkConfiguration VirtualNetworkConfiguration = null,
    string VirtualNetworkType = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail">PublisherEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName">PublisherName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation">AdditionalLocation</a></code> | <code>object</code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation">Delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled">GatewayDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration">HostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion">MinApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols">Protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp">SignUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess">TenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType">VirtualNetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#location ApiManagement#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#name ApiManagement#name}.

---

##### `PublisherEmail`<sup>Required</sup> <a name="PublisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail"></a>

```csharp
public string PublisherEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `PublisherName`<sup>Required</sup> <a name="PublisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName"></a>

```csharp
public string PublisherName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#sku_name ApiManagement#sku_name}.

---

##### `AdditionalLocation`<sup>Optional</sup> <a name="AdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation"></a>

```csharp
public object AdditionalLocation { get; set; }
```

- *Type:* object

additional_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#additional_location ApiManagement#additional_location}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}

---

##### `ClientCertificateEnabled`<sup>Optional</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled"></a>

```csharp
public object ClientCertificateEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `Delegation`<sup>Optional</sup> <a name="Delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation"></a>

```csharp
public ApiManagementDelegation Delegation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#delegation ApiManagement#delegation}

---

##### `GatewayDisabled`<sup>Optional</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled"></a>

```csharp
public object GatewayDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `HostnameConfiguration`<sup>Optional</sup> <a name="HostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration"></a>

```csharp
public ApiManagementHostnameConfiguration HostnameConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity"></a>

```csharp
public ApiManagementIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#identity ApiManagement#identity}

---

##### `MinApiVersion`<sup>Optional</sup> <a name="MinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion"></a>

```csharp
public string MinApiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `NotificationSenderEmail`<sup>Optional</sup> <a name="NotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail"></a>

```csharp
public string NotificationSenderEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols"></a>

```csharp
public ApiManagementProtocols Protocols { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#protocols ApiManagement#protocols}

---

##### `PublicIpAddressId`<sup>Optional</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId"></a>

```csharp
public string PublicIpAddressId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security"></a>

```csharp
public ApiManagementSecurity Security { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#security ApiManagement#security}

---

##### `SignIn`<sup>Optional</sup> <a name="SignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn"></a>

```csharp
public ApiManagementSignIn SignIn { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#sign_in ApiManagement#sign_in}

---

##### `SignUp`<sup>Optional</sup> <a name="SignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp"></a>

```csharp
public ApiManagementSignUp SignUp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#sign_up ApiManagement#sign_up}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tags ApiManagement#tags}.

---

##### `TenantAccess`<sup>Optional</sup> <a name="TenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess"></a>

```csharp
public ApiManagementTenantAccess TenantAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tenant_access ApiManagement#tenant_access}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts"></a>

```csharp
public ApiManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#timeouts ApiManagement#timeouts}

---

##### `VirtualNetworkConfiguration`<sup>Optional</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration"></a>

```csharp
public ApiManagementVirtualNetworkConfiguration VirtualNetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `VirtualNetworkType`<sup>Optional</sup> <a name="VirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType"></a>

```csharp
public string VirtualNetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementDelegation <a name="ApiManagementDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDelegation {
    object SubscriptionsEnabled = null,
    string Url = null,
    object UserRegistrationEnabled = null,
    string ValidationKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#url ApiManagement#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled">UserRegistrationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey">ValidationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#validation_key ApiManagement#validation_key}. |

---

##### `SubscriptionsEnabled`<sup>Optional</sup> <a name="SubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled"></a>

```csharp
public object SubscriptionsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#url ApiManagement#url}.

---

##### `UserRegistrationEnabled`<sup>Optional</sup> <a name="UserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled"></a>

```csharp
public object UserRegistrationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}.

---

##### `ValidationKey`<sup>Optional</sup> <a name="ValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey"></a>

```csharp
public string ValidationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#validation_key ApiManagement#validation_key}.

---

### ApiManagementHostnameConfiguration <a name="ApiManagementHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfiguration {
    object DeveloperPortal = null,
    object Management = null,
    object Portal = null,
    object Proxy = null,
    object Scm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal">DeveloperPortal</a></code> | <code>object</code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management">Management</a></code> | <code>object</code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal">Portal</a></code> | <code>object</code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy">Proxy</a></code> | <code>object</code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm">Scm</a></code> | <code>object</code> | scm block. |

---

##### `DeveloperPortal`<sup>Optional</sup> <a name="DeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal"></a>

```csharp
public object DeveloperPortal { get; set; }
```

- *Type:* object

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#developer_portal ApiManagement#developer_portal}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management"></a>

```csharp
public object Management { get; set; }
```

- *Type:* object

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#management ApiManagement#management}

---

##### `Portal`<sup>Optional</sup> <a name="Portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal"></a>

```csharp
public object Portal { get; set; }
```

- *Type:* object

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#portal ApiManagement#portal}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy"></a>

```csharp
public object Proxy { get; set; }
```

- *Type:* object

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#proxy ApiManagement#proxy}

---

##### `Scm`<sup>Optional</sup> <a name="Scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm"></a>

```csharp
public object Scm { get; set; }
```

- *Type:* object

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#scm ApiManagement#scm}

---

### ApiManagementHostnameConfigurationDeveloperPortal <a name="ApiManagementHostnameConfigurationDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationDeveloperPortal {
    string HostName,
    string Certificate = null,
    string CertificatePassword = null,
    string KeyVaultCertificateId = null,
    string KeyVaultId = null,
    object NegotiateClientCertificate = null,
    string SslKeyvaultIdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationManagement <a name="ApiManagementHostnameConfigurationManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationManagement {
    string HostName,
    string Certificate = null,
    string CertificatePassword = null,
    string KeyVaultCertificateId = null,
    string KeyVaultId = null,
    object NegotiateClientCertificate = null,
    string SslKeyvaultIdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationPortal <a name="ApiManagementHostnameConfigurationPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationPortal {
    string HostName,
    string Certificate = null,
    string CertificatePassword = null,
    string KeyVaultCertificateId = null,
    string KeyVaultId = null,
    object NegotiateClientCertificate = null,
    string SslKeyvaultIdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationProxy <a name="ApiManagementHostnameConfigurationProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationProxy {
    string HostName,
    string Certificate = null,
    string CertificatePassword = null,
    object DefaultSslBinding = null,
    string KeyVaultCertificateId = null,
    string KeyVaultId = null,
    object NegotiateClientCertificate = null,
    string SslKeyvaultIdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding">DefaultSslBinding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `DefaultSslBinding`<sup>Optional</sup> <a name="DefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding"></a>

```csharp
public object DefaultSslBinding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationScm <a name="ApiManagementHostnameConfigurationScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationScm {
    string HostName,
    string Certificate = null,
    string CertificatePassword = null,
    string KeyVaultCertificateId = null,
    string KeyVaultId = null,
    object NegotiateClientCertificate = null,
    string SslKeyvaultIdentityClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_certificate_id ApiManagement#key_vault_certificate_id}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementIdentity <a name="ApiManagementIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#type ApiManagement#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#identity_ids ApiManagement#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#type ApiManagement#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#identity_ids ApiManagement#identity_ids}.

---

### ApiManagementProtocols <a name="ApiManagementProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementProtocols {
    object EnableHttp2 = null,
    object Http2Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2">EnableHttp2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#http2_enabled ApiManagement#http2_enabled}. |

---

##### `EnableHttp2`<sup>Optional</sup> <a name="EnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2"></a>

```csharp
public object EnableHttp2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#http2_enabled ApiManagement#http2_enabled}.

---

### ApiManagementSecurity <a name="ApiManagementSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSecurity {
    object BackendSsl30Enabled = null,
    object BackendTls10Enabled = null,
    object BackendTls11Enabled = null,
    object EnableBackendSsl30 = null,
    object EnableBackendTls10 = null,
    object EnableBackendTls11 = null,
    object EnableFrontendSsl30 = null,
    object EnableFrontendTls10 = null,
    object EnableFrontendTls11 = null,
    object FrontendSsl30Enabled = null,
    object FrontendTls10Enabled = null,
    object FrontendTls11Enabled = null,
    object TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled = null,
    object TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled = null,
    object TlsEcdheRsaWithAes128CbcShaCiphersEnabled = null,
    object TlsEcdheRsaWithAes256CbcShaCiphersEnabled = null,
    object TlsRsaWithAes128CbcSha256CiphersEnabled = null,
    object TlsRsaWithAes128CbcShaCiphersEnabled = null,
    object TlsRsaWithAes128GcmSha256CiphersEnabled = null,
    object TlsRsaWithAes256CbcSha256CiphersEnabled = null,
    object TlsRsaWithAes256CbcShaCiphersEnabled = null,
    object TlsRsaWithAes256GcmSha384CiphersEnabled = null,
    object TripleDesCiphersEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.backendSsl30Enabled">BackendSsl30Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#backend_ssl30_enabled ApiManagement#backend_ssl30_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.backendTls10Enabled">BackendTls10Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#backend_tls10_enabled ApiManagement#backend_tls10_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.backendTls11Enabled">BackendTls11Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#backend_tls11_enabled ApiManagement#backend_tls11_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30">EnableBackendSsl30</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10">EnableBackendTls10</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11">EnableBackendTls11</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30">EnableFrontendSsl30</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10">EnableFrontendTls10</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11">EnableFrontendTls11</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.frontendSsl30Enabled">FrontendSsl30Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#frontend_ssl30_enabled ApiManagement#frontend_ssl30_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.frontendTls10Enabled">FrontendTls10Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#frontend_tls10_enabled ApiManagement#frontend_tls10_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.frontendTls11Enabled">FrontendTls11Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#frontend_tls11_enabled ApiManagement#frontend_tls11_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">TlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">TlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled">TlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled">TlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled">TlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled">TlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled">TlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled">TlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled">TripleDesCiphersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}. |

---

##### `BackendSsl30Enabled`<sup>Optional</sup> <a name="BackendSsl30Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.backendSsl30Enabled"></a>

```csharp
public object BackendSsl30Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#backend_ssl30_enabled ApiManagement#backend_ssl30_enabled}.

---

##### `BackendTls10Enabled`<sup>Optional</sup> <a name="BackendTls10Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.backendTls10Enabled"></a>

```csharp
public object BackendTls10Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#backend_tls10_enabled ApiManagement#backend_tls10_enabled}.

---

##### `BackendTls11Enabled`<sup>Optional</sup> <a name="BackendTls11Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.backendTls11Enabled"></a>

```csharp
public object BackendTls11Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#backend_tls11_enabled ApiManagement#backend_tls11_enabled}.

---

##### `EnableBackendSsl30`<sup>Optional</sup> <a name="EnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30"></a>

```csharp
public object EnableBackendSsl30 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}.

---

##### `EnableBackendTls10`<sup>Optional</sup> <a name="EnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10"></a>

```csharp
public object EnableBackendTls10 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}.

---

##### `EnableBackendTls11`<sup>Optional</sup> <a name="EnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11"></a>

```csharp
public object EnableBackendTls11 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}.

---

##### `EnableFrontendSsl30`<sup>Optional</sup> <a name="EnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30"></a>

```csharp
public object EnableFrontendSsl30 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}.

---

##### `EnableFrontendTls10`<sup>Optional</sup> <a name="EnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10"></a>

```csharp
public object EnableFrontendTls10 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}.

---

##### `EnableFrontendTls11`<sup>Optional</sup> <a name="EnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11"></a>

```csharp
public object EnableFrontendTls11 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}.

---

##### `FrontendSsl30Enabled`<sup>Optional</sup> <a name="FrontendSsl30Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.frontendSsl30Enabled"></a>

```csharp
public object FrontendSsl30Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#frontend_ssl30_enabled ApiManagement#frontend_ssl30_enabled}.

---

##### `FrontendTls10Enabled`<sup>Optional</sup> <a name="FrontendTls10Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.frontendTls10Enabled"></a>

```csharp
public object FrontendTls10Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#frontend_tls10_enabled ApiManagement#frontend_tls10_enabled}.

---

##### `FrontendTls11Enabled`<sup>Optional</sup> <a name="FrontendTls11Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.frontendTls11Enabled"></a>

```csharp
public object FrontendTls11Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#frontend_tls11_enabled ApiManagement#frontend_tls11_enabled}.

---

##### `TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `TlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheRsaWithAes128CbcShaCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `TlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheRsaWithAes256CbcShaCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `TlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes128CbcSha256CiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}.

---

##### `TlsRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
public object TlsRsaWithAes128CbcShaCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `TlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes128GcmSha256CiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}.

---

##### `TlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes256CbcSha256CiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}.

---

##### `TlsRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
public object TlsRsaWithAes256CbcShaCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `TlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes256GcmSha384CiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}.

---

##### `TripleDesCiphersEnabled`<sup>Optional</sup> <a name="TripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled"></a>

```csharp
public object TripleDesCiphersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}.

---

### ApiManagementSignIn <a name="ApiManagementSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSignIn {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementSignUp <a name="ApiManagementSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSignUp {
    object Enabled,
    ApiManagementSignUpTermsOfService TermsOfService
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService">TermsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | terms_of_service block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `TermsOfService`<sup>Required</sup> <a name="TermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService"></a>

```csharp
public ApiManagementSignUpTermsOfService TermsOfService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

terms_of_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#terms_of_service ApiManagement#terms_of_service}

---

### ApiManagementSignUpTermsOfService <a name="ApiManagementSignUpTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSignUpTermsOfService {
    object ConsentRequired,
    object Enabled,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired">ConsentRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#consent_required ApiManagement#consent_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#text ApiManagement#text}. |

---

##### `ConsentRequired`<sup>Required</sup> <a name="ConsentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired"></a>

```csharp
public object ConsentRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#consent_required ApiManagement#consent_required}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#text ApiManagement#text}.

---

### ApiManagementTenantAccess <a name="ApiManagementTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementTenantAccess {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementTimeouts <a name="ApiManagementTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#create ApiManagement#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#delete ApiManagement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#read ApiManagement#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#update ApiManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#create ApiManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#delete ApiManagement#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#read ApiManagement#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#update ApiManagement#update}.

---

### ApiManagementVirtualNetworkConfiguration <a name="ApiManagementVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementVirtualNetworkConfiguration {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAdditionalLocationList <a name="ApiManagementAdditionalLocationList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementAdditionalLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get"></a>

```csharp
private ApiManagementAdditionalLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementAdditionalLocationOutputReference <a name="ApiManagementAdditionalLocationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementAdditionalLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration">PutVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled">ResetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId">ResetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration">ResetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualNetworkConfiguration` <a name="PutVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration"></a>

```csharp
private void PutVirtualNetworkConfiguration(ApiManagementAdditionalLocationVirtualNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetGatewayDisabled` <a name="ResetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled"></a>

```csharp
private void ResetGatewayDisabled()
```

##### `ResetPublicIpAddressId` <a name="ResetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId"></a>

```csharp
private void ResetPublicIpAddressId()
```

##### `ResetVirtualNetworkConfiguration` <a name="ResetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration"></a>

```csharp
private void ResetVirtualNetworkConfiguration()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones"></a>

```csharp
private void ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl">GatewayRegionalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput">GatewayDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput">PublicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput">VirtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled">GatewayDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewayRegionalUrl`<sup>Required</sup> <a name="GatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl"></a>

```csharp
public string GatewayRegionalUrl { get; }
```

- *Type:* string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses"></a>

```csharp
public string[] PrivateIpAddresses { get; }
```

- *Type:* string[]

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses"></a>

```csharp
public string[] PublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkConfiguration`<sup>Required</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration"></a>

```csharp
public ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference VirtualNetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `GatewayDisabledInput`<sup>Optional</sup> <a name="GatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput"></a>

```csharp
public object GatewayDisabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PublicIpAddressIdInput`<sup>Optional</sup> <a name="PublicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput"></a>

```csharp
public string PublicIpAddressIdInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkConfigurationInput`<sup>Optional</sup> <a name="VirtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput"></a>

```csharp
public ApiManagementAdditionalLocationVirtualNetworkConfiguration VirtualNetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `GatewayDisabled`<sup>Required</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled"></a>

```csharp
public object GatewayDisabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId"></a>

```csharp
public string PublicIpAddressId { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference <a name="ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public ApiManagementAdditionalLocationVirtualNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---


### ApiManagementCertificateList <a name="ApiManagementCertificateList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get"></a>

```csharp
private ApiManagementCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementCertificateOutputReference <a name="ApiManagementCertificateOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword"></a>

```csharp
private void ResetCertificatePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput">EncodedCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput">StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate">EncodedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName">StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `EncodedCertificateInput`<sup>Optional</sup> <a name="EncodedCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput"></a>

```csharp
public string EncodedCertificateInput { get; }
```

- *Type:* string

---

##### `StoreNameInput`<sup>Optional</sup> <a name="StoreNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput"></a>

```csharp
public string StoreNameInput { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `EncodedCertificate`<sup>Required</sup> <a name="EncodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate"></a>

```csharp
public string EncodedCertificate { get; }
```

- *Type:* string

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName"></a>

```csharp
public string StoreName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementDelegationOutputReference <a name="ApiManagementDelegationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementDelegationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled">ResetSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled">ResetUserRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey">ResetValidationKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriptionsEnabled` <a name="ResetSubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled"></a>

```csharp
private void ResetSubscriptionsEnabled()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserRegistrationEnabled` <a name="ResetUserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled"></a>

```csharp
private void ResetUserRegistrationEnabled()
```

##### `ResetValidationKey` <a name="ResetValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey"></a>

```csharp
private void ResetValidationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput">SubscriptionsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput">UserRegistrationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput">ValidationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled">UserRegistrationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey">ValidationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubscriptionsEnabledInput`<sup>Optional</sup> <a name="SubscriptionsEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput"></a>

```csharp
public object SubscriptionsEnabledInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserRegistrationEnabledInput`<sup>Optional</sup> <a name="UserRegistrationEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput"></a>

```csharp
public object UserRegistrationEnabledInput { get; }
```

- *Type:* object

---

##### `ValidationKeyInput`<sup>Optional</sup> <a name="ValidationKeyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput"></a>

```csharp
public string ValidationKeyInput { get; }
```

- *Type:* string

---

##### `SubscriptionsEnabled`<sup>Required</sup> <a name="SubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled"></a>

```csharp
public object SubscriptionsEnabled { get; }
```

- *Type:* object

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserRegistrationEnabled`<sup>Required</sup> <a name="UserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled"></a>

```csharp
public object UserRegistrationEnabled { get; }
```

- *Type:* object

---

##### `ValidationKey`<sup>Required</sup> <a name="ValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey"></a>

```csharp
public string ValidationKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue"></a>

```csharp
public ApiManagementDelegation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---


### ApiManagementHostnameConfigurationDeveloperPortalList <a name="ApiManagementHostnameConfigurationDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationDeveloperPortalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get"></a>

```csharp
private ApiManagementHostnameConfigurationDeveloperPortalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationDeveloperPortalOutputReference <a name="ApiManagementHostnameConfigurationDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationDeveloperPortalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword"></a>

```csharp
private void ResetCertificatePassword()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultCertificateId"></a>

```csharp
private void ResetKeyVaultCertificateId()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```csharp
private void ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```csharp
private void ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource">CertificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource"></a>

```csharp
public string CertificateSource { get; }
```

- *Type:* string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus"></a>

```csharp
public string CertificateStatus { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultCertificateIdInput"></a>

```csharp
public string KeyVaultCertificateIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```csharp
public object NegotiateClientCertificateInput { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```csharp
public string SslKeyvaultIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationManagementList <a name="ApiManagementHostnameConfigurationManagementList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationManagementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get"></a>

```csharp
private ApiManagementHostnameConfigurationManagementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationManagementOutputReference <a name="ApiManagementHostnameConfigurationManagementOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword"></a>

```csharp
private void ResetCertificatePassword()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultCertificateId"></a>

```csharp
private void ResetKeyVaultCertificateId()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate"></a>

```csharp
private void ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```csharp
private void ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource">CertificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource"></a>

```csharp
public string CertificateSource { get; }
```

- *Type:* string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus"></a>

```csharp
public string CertificateStatus { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultCertificateIdInput"></a>

```csharp
public string KeyVaultCertificateIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput"></a>

```csharp
public object NegotiateClientCertificateInput { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```csharp
public string SslKeyvaultIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationOutputReference <a name="ApiManagementHostnameConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal">PutDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement">PutManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal">PutPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm">PutScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal">ResetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement">ResetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal">ResetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm">ResetScm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeveloperPortal` <a name="PutDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal"></a>

```csharp
private void PutDeveloperPortal(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal.parameter.value"></a>

- *Type:* object

---

##### `PutManagement` <a name="PutManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement"></a>

```csharp
private void PutManagement(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement.parameter.value"></a>

- *Type:* object

---

##### `PutPortal` <a name="PutPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal"></a>

```csharp
private void PutPortal(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal.parameter.value"></a>

- *Type:* object

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy"></a>

```csharp
private void PutProxy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy.parameter.value"></a>

- *Type:* object

---

##### `PutScm` <a name="PutScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm"></a>

```csharp
private void PutScm(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm.parameter.value"></a>

- *Type:* object

---

##### `ResetDeveloperPortal` <a name="ResetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal"></a>

```csharp
private void ResetDeveloperPortal()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement"></a>

```csharp
private void ResetManagement()
```

##### `ResetPortal` <a name="ResetPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal"></a>

```csharp
private void ResetPortal()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy"></a>

```csharp
private void ResetProxy()
```

##### `ResetScm` <a name="ResetScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm"></a>

```csharp
private void ResetScm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal">DeveloperPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management">Management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal">Portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm">Scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput">DeveloperPortalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput">ManagementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput">PortalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput">ProxyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput">ScmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeveloperPortal`<sup>Required</sup> <a name="DeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal"></a>

```csharp
public ApiManagementHostnameConfigurationDeveloperPortalList DeveloperPortal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management"></a>

```csharp
public ApiManagementHostnameConfigurationManagementList Management { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a>

---

##### `Portal`<sup>Required</sup> <a name="Portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal"></a>

```csharp
public ApiManagementHostnameConfigurationPortalList Portal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy"></a>

```csharp
public ApiManagementHostnameConfigurationProxyList Proxy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a>

---

##### `Scm`<sup>Required</sup> <a name="Scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm"></a>

```csharp
public ApiManagementHostnameConfigurationScmList Scm { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a>

---

##### `DeveloperPortalInput`<sup>Optional</sup> <a name="DeveloperPortalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput"></a>

```csharp
public object DeveloperPortalInput { get; }
```

- *Type:* object

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput"></a>

```csharp
public object ManagementInput { get; }
```

- *Type:* object

---

##### `PortalInput`<sup>Optional</sup> <a name="PortalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput"></a>

```csharp
public object PortalInput { get; }
```

- *Type:* object

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput"></a>

```csharp
public object ProxyInput { get; }
```

- *Type:* object

---

##### `ScmInput`<sup>Optional</sup> <a name="ScmInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput"></a>

```csharp
public object ScmInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue"></a>

```csharp
public ApiManagementHostnameConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---


### ApiManagementHostnameConfigurationPortalList <a name="ApiManagementHostnameConfigurationPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationPortalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get"></a>

```csharp
private ApiManagementHostnameConfigurationPortalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationPortalOutputReference <a name="ApiManagementHostnameConfigurationPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationPortalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword"></a>

```csharp
private void ResetCertificatePassword()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultCertificateId"></a>

```csharp
private void ResetKeyVaultCertificateId()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate"></a>

```csharp
private void ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```csharp
private void ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource">CertificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource"></a>

```csharp
public string CertificateSource { get; }
```

- *Type:* string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus"></a>

```csharp
public string CertificateStatus { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultCertificateIdInput"></a>

```csharp
public string KeyVaultCertificateIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput"></a>

```csharp
public object NegotiateClientCertificateInput { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```csharp
public string SslKeyvaultIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationProxyList <a name="ApiManagementHostnameConfigurationProxyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationProxyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get"></a>

```csharp
private ApiManagementHostnameConfigurationProxyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationProxyOutputReference <a name="ApiManagementHostnameConfigurationProxyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding">ResetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword"></a>

```csharp
private void ResetCertificatePassword()
```

##### `ResetDefaultSslBinding` <a name="ResetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding"></a>

```csharp
private void ResetDefaultSslBinding()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultCertificateId"></a>

```csharp
private void ResetKeyVaultCertificateId()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate"></a>

```csharp
private void ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId"></a>

```csharp
private void ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource">CertificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput">DefaultSslBindingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding">DefaultSslBinding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource"></a>

```csharp
public string CertificateSource { get; }
```

- *Type:* string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus"></a>

```csharp
public string CertificateStatus { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `DefaultSslBindingInput`<sup>Optional</sup> <a name="DefaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput"></a>

```csharp
public object DefaultSslBindingInput { get; }
```

- *Type:* object

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultCertificateIdInput"></a>

```csharp
public string KeyVaultCertificateIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput"></a>

```csharp
public object NegotiateClientCertificateInput { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```csharp
public string SslKeyvaultIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `DefaultSslBinding`<sup>Required</sup> <a name="DefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding"></a>

```csharp
public object DefaultSslBinding { get; }
```

- *Type:* object

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationScmList <a name="ApiManagementHostnameConfigurationScmList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationScmList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get"></a>

```csharp
private ApiManagementHostnameConfigurationScmOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementHostnameConfigurationScmOutputReference <a name="ApiManagementHostnameConfigurationScmOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementHostnameConfigurationScmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword"></a>

```csharp
private void ResetCertificatePassword()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultCertificateId"></a>

```csharp
private void ResetKeyVaultCertificateId()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate"></a>

```csharp
private void ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```csharp
private void ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource">CertificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource"></a>

```csharp
public string CertificateSource { get; }
```

- *Type:* string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus"></a>

```csharp
public string CertificateStatus { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultCertificateIdInput"></a>

```csharp
public string KeyVaultCertificateIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput"></a>

```csharp
public object NegotiateClientCertificateInput { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```csharp
public string SslKeyvaultIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultCertificateId"></a>

```csharp
public string KeyVaultCertificateId { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate"></a>

```csharp
public object NegotiateClientCertificate { get; }
```

- *Type:* object

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```csharp
public string SslKeyvaultIdentityClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementIdentityOutputReference <a name="ApiManagementIdentityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue"></a>

```csharp
public ApiManagementIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---


### ApiManagementProtocolsOutputReference <a name="ApiManagementProtocolsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementProtocolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2">ResetEnableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableHttp2` <a name="ResetEnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2"></a>

```csharp
private void ResetEnableHttp2()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input">EnableHttp2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2">EnableHttp2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableHttp2Input`<sup>Optional</sup> <a name="EnableHttp2Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input"></a>

```csharp
public object EnableHttp2Input { get; }
```

- *Type:* object

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.http2EnabledInput"></a>

```csharp
public object Http2EnabledInput { get; }
```

- *Type:* object

---

##### `EnableHttp2`<sup>Required</sup> <a name="EnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2"></a>

```csharp
public object EnableHttp2 { get; }
```

- *Type:* object

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue"></a>

```csharp
public ApiManagementProtocols InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---


### ApiManagementSecurityOutputReference <a name="ApiManagementSecurityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetBackendSsl30Enabled">ResetBackendSsl30Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetBackendTls10Enabled">ResetBackendTls10Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetBackendTls11Enabled">ResetBackendTls11Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30">ResetEnableBackendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10">ResetEnableBackendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11">ResetEnableBackendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30">ResetEnableFrontendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10">ResetEnableFrontendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11">ResetEnableFrontendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetFrontendSsl30Enabled">ResetFrontendSsl30Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetFrontendTls10Enabled">ResetFrontendTls10Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetFrontendTls11Enabled">ResetFrontendTls11Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled">ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled">ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled">ResetTlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled">ResetTlsRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled">ResetTlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled">ResetTlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled">ResetTlsRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled">ResetTlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled">ResetTripleDesCiphersEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendSsl30Enabled` <a name="ResetBackendSsl30Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetBackendSsl30Enabled"></a>

```csharp
private void ResetBackendSsl30Enabled()
```

##### `ResetBackendTls10Enabled` <a name="ResetBackendTls10Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetBackendTls10Enabled"></a>

```csharp
private void ResetBackendTls10Enabled()
```

##### `ResetBackendTls11Enabled` <a name="ResetBackendTls11Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetBackendTls11Enabled"></a>

```csharp
private void ResetBackendTls11Enabled()
```

##### `ResetEnableBackendSsl30` <a name="ResetEnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30"></a>

```csharp
private void ResetEnableBackendSsl30()
```

##### `ResetEnableBackendTls10` <a name="ResetEnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10"></a>

```csharp
private void ResetEnableBackendTls10()
```

##### `ResetEnableBackendTls11` <a name="ResetEnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11"></a>

```csharp
private void ResetEnableBackendTls11()
```

##### `ResetEnableFrontendSsl30` <a name="ResetEnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30"></a>

```csharp
private void ResetEnableFrontendSsl30()
```

##### `ResetEnableFrontendTls10` <a name="ResetEnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10"></a>

```csharp
private void ResetEnableFrontendTls10()
```

##### `ResetEnableFrontendTls11` <a name="ResetEnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11"></a>

```csharp
private void ResetEnableFrontendTls11()
```

##### `ResetFrontendSsl30Enabled` <a name="ResetFrontendSsl30Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetFrontendSsl30Enabled"></a>

```csharp
private void ResetFrontendSsl30Enabled()
```

##### `ResetFrontendTls10Enabled` <a name="ResetFrontendTls10Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetFrontendTls10Enabled"></a>

```csharp
private void ResetFrontendTls10Enabled()
```

##### `ResetFrontendTls11Enabled` <a name="ResetFrontendTls11Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetFrontendTls11Enabled"></a>

```csharp
private void ResetFrontendTls11Enabled()
```

##### `ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled` <a name="ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
private void ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled()
```

##### `ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled` <a name="ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
private void ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled()
```

##### `ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled` <a name="ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
private void ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled()
```

##### `ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled` <a name="ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
private void ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled()
```

##### `ResetTlsRsaWithAes128CbcSha256CiphersEnabled` <a name="ResetTlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```csharp
private void ResetTlsRsaWithAes128CbcSha256CiphersEnabled()
```

##### `ResetTlsRsaWithAes128CbcShaCiphersEnabled` <a name="ResetTlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
private void ResetTlsRsaWithAes128CbcShaCiphersEnabled()
```

##### `ResetTlsRsaWithAes128GcmSha256CiphersEnabled` <a name="ResetTlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```csharp
private void ResetTlsRsaWithAes128GcmSha256CiphersEnabled()
```

##### `ResetTlsRsaWithAes256CbcSha256CiphersEnabled` <a name="ResetTlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```csharp
private void ResetTlsRsaWithAes256CbcSha256CiphersEnabled()
```

##### `ResetTlsRsaWithAes256CbcShaCiphersEnabled` <a name="ResetTlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
private void ResetTlsRsaWithAes256CbcShaCiphersEnabled()
```

##### `ResetTlsRsaWithAes256GcmSha384CiphersEnabled` <a name="ResetTlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```csharp
private void ResetTlsRsaWithAes256GcmSha384CiphersEnabled()
```

##### `ResetTripleDesCiphersEnabled` <a name="ResetTripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled"></a>

```csharp
private void ResetTripleDesCiphersEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendSsl30EnabledInput">BackendSsl30EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls10EnabledInput">BackendTls10EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls11EnabledInput">BackendTls11EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input">EnableBackendSsl30Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input">EnableBackendTls10Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input">EnableBackendTls11Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input">EnableFrontendSsl30Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input">EnableFrontendTls10Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input">EnableFrontendTls11Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendSsl30EnabledInput">FrontendSsl30EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls10EnabledInput">FrontendTls10EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls11EnabledInput">FrontendTls11EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput">TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput">TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput">TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput">TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput">TlsRsaWithAes128CbcSha256CiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput">TlsRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput">TlsRsaWithAes128GcmSha256CiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput">TlsRsaWithAes256CbcSha256CiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput">TlsRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput">TlsRsaWithAes256GcmSha384CiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput">TripleDesCiphersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendSsl30Enabled">BackendSsl30Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls10Enabled">BackendTls10Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls11Enabled">BackendTls11Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30">EnableBackendSsl30</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10">EnableBackendTls10</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11">EnableBackendTls11</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30">EnableFrontendSsl30</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10">EnableFrontendTls10</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11">EnableFrontendTls11</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendSsl30Enabled">FrontendSsl30Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls10Enabled">FrontendTls10Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls11Enabled">FrontendTls11Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">TlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">TlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled">TlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled">TlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled">TlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled">TlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled">TlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled">TlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled">TripleDesCiphersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendSsl30EnabledInput`<sup>Optional</sup> <a name="BackendSsl30EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendSsl30EnabledInput"></a>

```csharp
public object BackendSsl30EnabledInput { get; }
```

- *Type:* object

---

##### `BackendTls10EnabledInput`<sup>Optional</sup> <a name="BackendTls10EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls10EnabledInput"></a>

```csharp
public object BackendTls10EnabledInput { get; }
```

- *Type:* object

---

##### `BackendTls11EnabledInput`<sup>Optional</sup> <a name="BackendTls11EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls11EnabledInput"></a>

```csharp
public object BackendTls11EnabledInput { get; }
```

- *Type:* object

---

##### `EnableBackendSsl30Input`<sup>Optional</sup> <a name="EnableBackendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input"></a>

```csharp
public object EnableBackendSsl30Input { get; }
```

- *Type:* object

---

##### `EnableBackendTls10Input`<sup>Optional</sup> <a name="EnableBackendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input"></a>

```csharp
public object EnableBackendTls10Input { get; }
```

- *Type:* object

---

##### `EnableBackendTls11Input`<sup>Optional</sup> <a name="EnableBackendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input"></a>

```csharp
public object EnableBackendTls11Input { get; }
```

- *Type:* object

---

##### `EnableFrontendSsl30Input`<sup>Optional</sup> <a name="EnableFrontendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input"></a>

```csharp
public object EnableFrontendSsl30Input { get; }
```

- *Type:* object

---

##### `EnableFrontendTls10Input`<sup>Optional</sup> <a name="EnableFrontendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input"></a>

```csharp
public object EnableFrontendTls10Input { get; }
```

- *Type:* object

---

##### `EnableFrontendTls11Input`<sup>Optional</sup> <a name="EnableFrontendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input"></a>

```csharp
public object EnableFrontendTls11Input { get; }
```

- *Type:* object

---

##### `FrontendSsl30EnabledInput`<sup>Optional</sup> <a name="FrontendSsl30EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendSsl30EnabledInput"></a>

```csharp
public object FrontendSsl30EnabledInput { get; }
```

- *Type:* object

---

##### `FrontendTls10EnabledInput`<sup>Optional</sup> <a name="FrontendTls10EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls10EnabledInput"></a>

```csharp
public object FrontendTls10EnabledInput { get; }
```

- *Type:* object

---

##### `FrontendTls11EnabledInput`<sup>Optional</sup> <a name="FrontendTls11EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls11EnabledInput"></a>

```csharp
public object FrontendTls11EnabledInput { get; }
```

- *Type:* object

---

##### `TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput"></a>

```csharp
public object TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput"></a>

```csharp
public object TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput"></a>

```csharp
public object TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput"></a>

```csharp
public object TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes128CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput"></a>

```csharp
public object TlsRsaWithAes128CbcSha256CiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput"></a>

```csharp
public object TlsRsaWithAes128CbcShaCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes128GcmSha256CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes128GcmSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput"></a>

```csharp
public object TlsRsaWithAes128GcmSha256CiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes256CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput"></a>

```csharp
public object TlsRsaWithAes256CbcSha256CiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput"></a>

```csharp
public object TlsRsaWithAes256CbcShaCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes256GcmSha384CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes256GcmSha384CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput"></a>

```csharp
public object TlsRsaWithAes256GcmSha384CiphersEnabledInput { get; }
```

- *Type:* object

---

##### `TripleDesCiphersEnabledInput`<sup>Optional</sup> <a name="TripleDesCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput"></a>

```csharp
public object TripleDesCiphersEnabledInput { get; }
```

- *Type:* object

---

##### `BackendSsl30Enabled`<sup>Required</sup> <a name="BackendSsl30Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendSsl30Enabled"></a>

```csharp
public object BackendSsl30Enabled { get; }
```

- *Type:* object

---

##### `BackendTls10Enabled`<sup>Required</sup> <a name="BackendTls10Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls10Enabled"></a>

```csharp
public object BackendTls10Enabled { get; }
```

- *Type:* object

---

##### `BackendTls11Enabled`<sup>Required</sup> <a name="BackendTls11Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.backendTls11Enabled"></a>

```csharp
public object BackendTls11Enabled { get; }
```

- *Type:* object

---

##### `EnableBackendSsl30`<sup>Required</sup> <a name="EnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30"></a>

```csharp
public object EnableBackendSsl30 { get; }
```

- *Type:* object

---

##### `EnableBackendTls10`<sup>Required</sup> <a name="EnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10"></a>

```csharp
public object EnableBackendTls10 { get; }
```

- *Type:* object

---

##### `EnableBackendTls11`<sup>Required</sup> <a name="EnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11"></a>

```csharp
public object EnableBackendTls11 { get; }
```

- *Type:* object

---

##### `EnableFrontendSsl30`<sup>Required</sup> <a name="EnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30"></a>

```csharp
public object EnableFrontendSsl30 { get; }
```

- *Type:* object

---

##### `EnableFrontendTls10`<sup>Required</sup> <a name="EnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10"></a>

```csharp
public object EnableFrontendTls10 { get; }
```

- *Type:* object

---

##### `EnableFrontendTls11`<sup>Required</sup> <a name="EnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11"></a>

```csharp
public object EnableFrontendTls11 { get; }
```

- *Type:* object

---

##### `FrontendSsl30Enabled`<sup>Required</sup> <a name="FrontendSsl30Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendSsl30Enabled"></a>

```csharp
public object FrontendSsl30Enabled { get; }
```

- *Type:* object

---

##### `FrontendTls10Enabled`<sup>Required</sup> <a name="FrontendTls10Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls10Enabled"></a>

```csharp
public object FrontendTls10Enabled { get; }
```

- *Type:* object

---

##### `FrontendTls11Enabled`<sup>Required</sup> <a name="FrontendTls11Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.frontendTls11Enabled"></a>

```csharp
public object FrontendTls11Enabled { get; }
```

- *Type:* object

---

##### `TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheRsaWithAes128CbcShaCiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
public object TlsEcdheRsaWithAes256CbcShaCiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes128CbcSha256CiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```csharp
public object TlsRsaWithAes128CbcShaCiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes128GcmSha256CiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes256CbcSha256CiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```csharp
public object TlsRsaWithAes256CbcShaCiphersEnabled { get; }
```

- *Type:* object

---

##### `TlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```csharp
public object TlsRsaWithAes256GcmSha384CiphersEnabled { get; }
```

- *Type:* object

---

##### `TripleDesCiphersEnabled`<sup>Required</sup> <a name="TripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled"></a>

```csharp
public object TripleDesCiphersEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue"></a>

```csharp
public ApiManagementSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---


### ApiManagementSignInOutputReference <a name="ApiManagementSignInOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSignInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue"></a>

```csharp
public ApiManagementSignIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---


### ApiManagementSignUpOutputReference <a name="ApiManagementSignUpOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSignUpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService">PutTermsOfService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTermsOfService` <a name="PutTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService"></a>

```csharp
private void PutTermsOfService(ApiManagementSignUpTermsOfService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService">TermsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput">TermsOfServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TermsOfService`<sup>Required</sup> <a name="TermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService"></a>

```csharp
public ApiManagementSignUpTermsOfServiceOutputReference TermsOfService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TermsOfServiceInput`<sup>Optional</sup> <a name="TermsOfServiceInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput"></a>

```csharp
public ApiManagementSignUpTermsOfService TermsOfServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue"></a>

```csharp
public ApiManagementSignUp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---


### ApiManagementSignUpTermsOfServiceOutputReference <a name="ApiManagementSignUpTermsOfServiceOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementSignUpTermsOfServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput">ConsentRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired">ConsentRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsentRequiredInput`<sup>Optional</sup> <a name="ConsentRequiredInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput"></a>

```csharp
public object ConsentRequiredInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `ConsentRequired`<sup>Required</sup> <a name="ConsentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired"></a>

```csharp
public object ConsentRequired { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue"></a>

```csharp
public ApiManagementSignUpTermsOfService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


### ApiManagementTenantAccessOutputReference <a name="ApiManagementTenantAccessOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementTenantAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue"></a>

```csharp
public ApiManagementTenantAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---


### ApiManagementTimeoutsOutputReference <a name="ApiManagementTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiManagementVirtualNetworkConfigurationOutputReference <a name="ApiManagementVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementVirtualNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public ApiManagementVirtualNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---



