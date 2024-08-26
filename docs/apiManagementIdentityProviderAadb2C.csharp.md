# `apiManagementIdentityProviderAadb2C` Submodule <a name="`apiManagementIdentityProviderAadb2C` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderAadb2C <a name="ApiManagementIdentityProviderAadb2C" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c azurerm_api_management_identity_provider_aadb2c}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementIdentityProviderAadb2C(Construct Scope, string Id, ApiManagementIdentityProviderAadb2CConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig">ApiManagementIdentityProviderAadb2CConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig">ApiManagementIdentityProviderAadb2CConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetClientLibrary">ResetClientLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetPasswordResetPolicy">ResetPasswordResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetProfileEditingPolicy">ResetProfileEditingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementIdentityProviderAadb2CTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts">ApiManagementIdentityProviderAadb2CTimeouts</a>

---

##### `ResetClientLibrary` <a name="ResetClientLibrary" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetClientLibrary"></a>

```csharp
private void ResetClientLibrary()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPasswordResetPolicy` <a name="ResetPasswordResetPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetPasswordResetPolicy"></a>

```csharp
private void ResetPasswordResetPolicy()
```

##### `ResetProfileEditingPolicy` <a name="ResetProfileEditingPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetProfileEditingPolicy"></a>

```csharp
private void ResetProfileEditingPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementIdentityProviderAadb2C resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementIdentityProviderAadb2C.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementIdentityProviderAadb2C.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementIdentityProviderAadb2C.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementIdentityProviderAadb2C.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagementIdentityProviderAadb2C resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementIdentityProviderAadb2C to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementIdentityProviderAadb2C that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementIdentityProviderAadb2C to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference">ApiManagementIdentityProviderAadb2CTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenantInput">AllowedTenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authorityInput">AuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientLibraryInput">ClientLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicyInput">PasswordResetPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicyInput">ProfileEditingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicyInput">SigninPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenantInput">SigninTenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicyInput">SignupPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenant">AllowedTenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authority">Authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientLibrary">ClientLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicy">PasswordResetPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicy">ProfileEditingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicy">SigninPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenant">SigninTenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicy">SignupPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeouts"></a>

```csharp
public ApiManagementIdentityProviderAadb2CTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference">ApiManagementIdentityProviderAadb2CTimeoutsOutputReference</a>

---

##### `AllowedTenantInput`<sup>Optional</sup> <a name="AllowedTenantInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenantInput"></a>

```csharp
public string AllowedTenantInput { get; }
```

- *Type:* string

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authorityInput"></a>

```csharp
public string AuthorityInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientLibraryInput`<sup>Optional</sup> <a name="ClientLibraryInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientLibraryInput"></a>

```csharp
public string ClientLibraryInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordResetPolicyInput`<sup>Optional</sup> <a name="PasswordResetPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicyInput"></a>

```csharp
public string PasswordResetPolicyInput { get; }
```

- *Type:* string

---

##### `ProfileEditingPolicyInput`<sup>Optional</sup> <a name="ProfileEditingPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicyInput"></a>

```csharp
public string ProfileEditingPolicyInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SigninPolicyInput`<sup>Optional</sup> <a name="SigninPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicyInput"></a>

```csharp
public string SigninPolicyInput { get; }
```

- *Type:* string

---

##### `SigninTenantInput`<sup>Optional</sup> <a name="SigninTenantInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenantInput"></a>

```csharp
public string SigninTenantInput { get; }
```

- *Type:* string

---

##### `SignupPolicyInput`<sup>Optional</sup> <a name="SignupPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicyInput"></a>

```csharp
public string SignupPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowedTenant`<sup>Required</sup> <a name="AllowedTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenant"></a>

```csharp
public string AllowedTenant { get; }
```

- *Type:* string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authority"></a>

```csharp
public string Authority { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientLibrary`<sup>Required</sup> <a name="ClientLibrary" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientLibrary"></a>

```csharp
public string ClientLibrary { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PasswordResetPolicy`<sup>Required</sup> <a name="PasswordResetPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicy"></a>

```csharp
public string PasswordResetPolicy { get; }
```

- *Type:* string

---

##### `ProfileEditingPolicy`<sup>Required</sup> <a name="ProfileEditingPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicy"></a>

```csharp
public string ProfileEditingPolicy { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SigninPolicy`<sup>Required</sup> <a name="SigninPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicy"></a>

```csharp
public string SigninPolicy { get; }
```

- *Type:* string

---

##### `SigninTenant`<sup>Required</sup> <a name="SigninTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenant"></a>

```csharp
public string SigninTenant { get; }
```

- *Type:* string

---

##### `SignupPolicy`<sup>Required</sup> <a name="SignupPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicy"></a>

```csharp
public string SignupPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderAadb2CConfig <a name="ApiManagementIdentityProviderAadb2CConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementIdentityProviderAadb2CConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AllowedTenant,
    string ApiManagementName,
    string Authority,
    string ClientId,
    string ClientSecret,
    string ResourceGroupName,
    string SigninPolicy,
    string SigninTenant,
    string SignupPolicy,
    string ClientLibrary = null,
    string Id = null,
    string PasswordResetPolicy = null,
    string ProfileEditingPolicy = null,
    ApiManagementIdentityProviderAadb2CTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.allowedTenant">AllowedTenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#allowed_tenant ApiManagementIdentityProviderAadb2C#allowed_tenant}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#api_management_name ApiManagementIdentityProviderAadb2C#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.authority">Authority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#authority ApiManagementIdentityProviderAadb2C#authority}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#client_id ApiManagementIdentityProviderAadb2C#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#client_secret ApiManagementIdentityProviderAadb2C#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#resource_group_name ApiManagementIdentityProviderAadb2C#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinPolicy">SigninPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#signin_policy ApiManagementIdentityProviderAadb2C#signin_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinTenant">SigninTenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#signin_tenant ApiManagementIdentityProviderAadb2C#signin_tenant}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signupPolicy">SignupPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#signup_policy ApiManagementIdentityProviderAadb2C#signup_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientLibrary">ClientLibrary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#client_library ApiManagementIdentityProviderAadb2C#client_library}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#id ApiManagementIdentityProviderAadb2C#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.passwordResetPolicy">PasswordResetPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#password_reset_policy ApiManagementIdentityProviderAadb2C#password_reset_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.profileEditingPolicy">ProfileEditingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#profile_editing_policy ApiManagementIdentityProviderAadb2C#profile_editing_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts">ApiManagementIdentityProviderAadb2CTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedTenant`<sup>Required</sup> <a name="AllowedTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.allowedTenant"></a>

```csharp
public string AllowedTenant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#allowed_tenant ApiManagementIdentityProviderAadb2C#allowed_tenant}.

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#api_management_name ApiManagementIdentityProviderAadb2C#api_management_name}.

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.authority"></a>

```csharp
public string Authority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#authority ApiManagementIdentityProviderAadb2C#authority}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#client_id ApiManagementIdentityProviderAadb2C#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#client_secret ApiManagementIdentityProviderAadb2C#client_secret}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#resource_group_name ApiManagementIdentityProviderAadb2C#resource_group_name}.

---

##### `SigninPolicy`<sup>Required</sup> <a name="SigninPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinPolicy"></a>

```csharp
public string SigninPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#signin_policy ApiManagementIdentityProviderAadb2C#signin_policy}.

---

##### `SigninTenant`<sup>Required</sup> <a name="SigninTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinTenant"></a>

```csharp
public string SigninTenant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#signin_tenant ApiManagementIdentityProviderAadb2C#signin_tenant}.

---

##### `SignupPolicy`<sup>Required</sup> <a name="SignupPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signupPolicy"></a>

```csharp
public string SignupPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#signup_policy ApiManagementIdentityProviderAadb2C#signup_policy}.

---

##### `ClientLibrary`<sup>Optional</sup> <a name="ClientLibrary" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientLibrary"></a>

```csharp
public string ClientLibrary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#client_library ApiManagementIdentityProviderAadb2C#client_library}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#id ApiManagementIdentityProviderAadb2C#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordResetPolicy`<sup>Optional</sup> <a name="PasswordResetPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.passwordResetPolicy"></a>

```csharp
public string PasswordResetPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#password_reset_policy ApiManagementIdentityProviderAadb2C#password_reset_policy}.

---

##### `ProfileEditingPolicy`<sup>Optional</sup> <a name="ProfileEditingPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.profileEditingPolicy"></a>

```csharp
public string ProfileEditingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#profile_editing_policy ApiManagementIdentityProviderAadb2C#profile_editing_policy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.timeouts"></a>

```csharp
public ApiManagementIdentityProviderAadb2CTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts">ApiManagementIdentityProviderAadb2CTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#timeouts ApiManagementIdentityProviderAadb2C#timeouts}

---

### ApiManagementIdentityProviderAadb2CTimeouts <a name="ApiManagementIdentityProviderAadb2CTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementIdentityProviderAadb2CTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#create ApiManagementIdentityProviderAadb2C#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#delete ApiManagementIdentityProviderAadb2C#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#read ApiManagementIdentityProviderAadb2C#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#update ApiManagementIdentityProviderAadb2C#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#create ApiManagementIdentityProviderAadb2C#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#delete ApiManagementIdentityProviderAadb2C#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#read ApiManagementIdentityProviderAadb2C#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/api_management_identity_provider_aadb2c#update ApiManagementIdentityProviderAadb2C#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderAadb2CTimeoutsOutputReference <a name="ApiManagementIdentityProviderAadb2CTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementIdentityProviderAadb2CTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



