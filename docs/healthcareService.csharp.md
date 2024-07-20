# `healthcareService` Submodule <a name="`healthcareService` Submodule" id="@cdktf/provider-azurerm.healthcareService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareService <a name="HealthcareService" id="@cdktf/provider-azurerm.healthcareService.HealthcareService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service azurerm_healthcare_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareService(Construct Scope, string Id, HealthcareServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig">HealthcareServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig">HealthcareServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration">PutCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAccessPolicyObjectIds">ResetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetConfigurationExportStorageAccountName">ResetConfigurationExportStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCorsConfiguration">ResetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbKeyVaultKeyVersionlessId">ResetCosmosdbKeyVaultKeyVersionlessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbThroughput">ResetCosmosdbThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(HealthcareServiceAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---

##### `PutCorsConfiguration` <a name="PutCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration"></a>

```csharp
private void PutCorsConfiguration(HealthcareServiceCorsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putIdentity"></a>

```csharp
private void PutIdentity(HealthcareServiceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts"></a>

```csharp
private void PutTimeouts(HealthcareServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

---

##### `ResetAccessPolicyObjectIds` <a name="ResetAccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAccessPolicyObjectIds"></a>

```csharp
private void ResetAccessPolicyObjectIds()
```

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetAuthenticationConfiguration"></a>

```csharp
private void ResetAuthenticationConfiguration()
```

##### `ResetConfigurationExportStorageAccountName` <a name="ResetConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetConfigurationExportStorageAccountName"></a>

```csharp
private void ResetConfigurationExportStorageAccountName()
```

##### `ResetCorsConfiguration` <a name="ResetCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCorsConfiguration"></a>

```csharp
private void ResetCorsConfiguration()
```

##### `ResetCosmosdbKeyVaultKeyVersionlessId` <a name="ResetCosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbKeyVaultKeyVersionlessId"></a>

```csharp
private void ResetCosmosdbKeyVaultKeyVersionlessId()
```

##### `ResetCosmosdbThroughput` <a name="ResetCosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetCosmosdbThroughput"></a>

```csharp
private void ResetCosmosdbThroughput()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HealthcareService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HealthcareService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference">HealthcareServiceAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference">HealthcareServiceCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference">HealthcareServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference">HealthcareServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIdsInput">AccessPolicyObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountNameInput">ConfigurationExportStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfigurationInput">CorsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessIdInput">CosmosdbKeyVaultKeyVersionlessIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughputInput">CosmosdbThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIds">AccessPolicyObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountName">ConfigurationExportStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessId">CosmosdbKeyVaultKeyVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughput">CosmosdbThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfiguration"></a>

```csharp
public HealthcareServiceAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference">HealthcareServiceAuthenticationConfigurationOutputReference</a>

---

##### `CorsConfiguration`<sup>Required</sup> <a name="CorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfiguration"></a>

```csharp
public HealthcareServiceCorsConfigurationOutputReference CorsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference">HealthcareServiceCorsConfigurationOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identity"></a>

```csharp
public HealthcareServiceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference">HealthcareServiceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeouts"></a>

```csharp
public HealthcareServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference">HealthcareServiceTimeoutsOutputReference</a>

---

##### `AccessPolicyObjectIdsInput`<sup>Optional</sup> <a name="AccessPolicyObjectIdsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIdsInput"></a>

```csharp
public string[] AccessPolicyObjectIdsInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.authenticationConfigurationInput"></a>

```csharp
public HealthcareServiceAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---

##### `ConfigurationExportStorageAccountNameInput`<sup>Optional</sup> <a name="ConfigurationExportStorageAccountNameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountNameInput"></a>

```csharp
public string ConfigurationExportStorageAccountNameInput { get; }
```

- *Type:* string

---

##### `CorsConfigurationInput`<sup>Optional</sup> <a name="CorsConfigurationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.corsConfigurationInput"></a>

```csharp
public HealthcareServiceCorsConfiguration CorsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---

##### `CosmosdbKeyVaultKeyVersionlessIdInput`<sup>Optional</sup> <a name="CosmosdbKeyVaultKeyVersionlessIdInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessIdInput"></a>

```csharp
public string CosmosdbKeyVaultKeyVersionlessIdInput { get; }
```

- *Type:* string

---

##### `CosmosdbThroughputInput`<sup>Optional</sup> <a name="CosmosdbThroughputInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughputInput"></a>

```csharp
public double CosmosdbThroughputInput { get; }
```

- *Type:* double

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.identityInput"></a>

```csharp
public HealthcareServiceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessPolicyObjectIds`<sup>Required</sup> <a name="AccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.accessPolicyObjectIds"></a>

```csharp
public string[] AccessPolicyObjectIds { get; }
```

- *Type:* string[]

---

##### `ConfigurationExportStorageAccountName`<sup>Required</sup> <a name="ConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.configurationExportStorageAccountName"></a>

```csharp
public string ConfigurationExportStorageAccountName { get; }
```

- *Type:* string

---

##### `CosmosdbKeyVaultKeyVersionlessId`<sup>Required</sup> <a name="CosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbKeyVaultKeyVersionlessId"></a>

```csharp
public string CosmosdbKeyVaultKeyVersionlessId { get; }
```

- *Type:* string

---

##### `CosmosdbThroughput`<sup>Required</sup> <a name="CosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.cosmosdbThroughput"></a>

```csharp
public double CosmosdbThroughput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.healthcareService.HealthcareService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareServiceAuthenticationConfiguration <a name="HealthcareServiceAuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceAuthenticationConfiguration {
    string Audience = null,
    string Authority = null,
    object SmartProxyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.audience">Audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#audience HealthcareService#audience}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.authority">Authority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#authority HealthcareService#authority}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.smartProxyEnabled">SmartProxyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#smart_proxy_enabled HealthcareService#smart_proxy_enabled}. |

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#audience HealthcareService#audience}.

---

##### `Authority`<sup>Optional</sup> <a name="Authority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.authority"></a>

```csharp
public string Authority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#authority HealthcareService#authority}.

---

##### `SmartProxyEnabled`<sup>Optional</sup> <a name="SmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration.property.smartProxyEnabled"></a>

```csharp
public object SmartProxyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#smart_proxy_enabled HealthcareService#smart_proxy_enabled}.

---

### HealthcareServiceConfig <a name="HealthcareServiceConfig" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] AccessPolicyObjectIds = null,
    HealthcareServiceAuthenticationConfiguration AuthenticationConfiguration = null,
    string ConfigurationExportStorageAccountName = null,
    HealthcareServiceCorsConfiguration CorsConfiguration = null,
    string CosmosdbKeyVaultKeyVersionlessId = null,
    double CosmosdbThroughput = null,
    string Id = null,
    HealthcareServiceIdentity Identity = null,
    string Kind = null,
    object PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    HealthcareServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#location HealthcareService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#name HealthcareService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.accessPolicyObjectIds">AccessPolicyObjectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.configurationExportStorageAccountName">ConfigurationExportStorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#configuration_export_storage_account_name HealthcareService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbKeyVaultKeyVersionlessId">CosmosdbKeyVaultKeyVersionlessId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbThroughput">CosmosdbThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#id HealthcareService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#kind HealthcareService#kind}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#tags HealthcareService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#location HealthcareService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#name HealthcareService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#resource_group_name HealthcareService#resource_group_name}.

---

##### `AccessPolicyObjectIds`<sup>Optional</sup> <a name="AccessPolicyObjectIds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.accessPolicyObjectIds"></a>

```csharp
public string[] AccessPolicyObjectIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#access_policy_object_ids HealthcareService#access_policy_object_ids}.

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.authenticationConfiguration"></a>

```csharp
public HealthcareServiceAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#authentication_configuration HealthcareService#authentication_configuration}

---

##### `ConfigurationExportStorageAccountName`<sup>Optional</sup> <a name="ConfigurationExportStorageAccountName" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.configurationExportStorageAccountName"></a>

```csharp
public string ConfigurationExportStorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#configuration_export_storage_account_name HealthcareService#configuration_export_storage_account_name}.

---

##### `CorsConfiguration`<sup>Optional</sup> <a name="CorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.corsConfiguration"></a>

```csharp
public HealthcareServiceCorsConfiguration CorsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cors_configuration HealthcareService#cors_configuration}

---

##### `CosmosdbKeyVaultKeyVersionlessId`<sup>Optional</sup> <a name="CosmosdbKeyVaultKeyVersionlessId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbKeyVaultKeyVersionlessId"></a>

```csharp
public string CosmosdbKeyVaultKeyVersionlessId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}.

---

##### `CosmosdbThroughput`<sup>Optional</sup> <a name="CosmosdbThroughput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.cosmosdbThroughput"></a>

```csharp
public double CosmosdbThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#cosmosdb_throughput HealthcareService#cosmosdb_throughput}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#id HealthcareService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.identity"></a>

```csharp
public HealthcareServiceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#identity HealthcareService#identity}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#kind HealthcareService#kind}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#public_network_access_enabled HealthcareService#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#tags HealthcareService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceConfig.property.timeouts"></a>

```csharp
public HealthcareServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts">HealthcareServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#timeouts HealthcareService#timeouts}

---

### HealthcareServiceCorsConfiguration <a name="HealthcareServiceCorsConfiguration" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceCorsConfiguration {
    object AllowCredentials = null,
    string[] AllowedHeaders = null,
    string[] AllowedMethods = null,
    string[] AllowedOrigins = null,
    double MaxAgeInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowCredentials">AllowCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allow_credentials HealthcareService#allow_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_headers HealthcareService#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_methods HealthcareService#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_origins HealthcareService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#max_age_in_seconds HealthcareService#max_age_in_seconds}. |

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowCredentials"></a>

```csharp
public object AllowCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allow_credentials HealthcareService#allow_credentials}.

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_headers HealthcareService#allowed_headers}.

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_methods HealthcareService#allowed_methods}.

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#allowed_origins HealthcareService#allowed_origins}.

---

##### `MaxAgeInSeconds`<sup>Optional</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#max_age_in_seconds HealthcareService#max_age_in_seconds}.

---

### HealthcareServiceIdentity <a name="HealthcareServiceIdentity" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#type HealthcareService#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#type HealthcareService#type}.

---

### HealthcareServiceTimeouts <a name="HealthcareServiceTimeouts" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#create HealthcareService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#delete HealthcareService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#read HealthcareService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#update HealthcareService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#create HealthcareService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#delete HealthcareService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#read HealthcareService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/healthcare_service#update HealthcareService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareServiceAuthenticationConfigurationOutputReference <a name="HealthcareServiceAuthenticationConfigurationOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAuthority">ResetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetSmartProxyEnabled">ResetSmartProxyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetAuthority` <a name="ResetAuthority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetAuthority"></a>

```csharp
private void ResetAuthority()
```

##### `ResetSmartProxyEnabled` <a name="ResetSmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.resetSmartProxyEnabled"></a>

```csharp
private void ResetSmartProxyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabledInput">SmartProxyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authority">Authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabled">SmartProxyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authorityInput"></a>

```csharp
public string AuthorityInput { get; }
```

- *Type:* string

---

##### `SmartProxyEnabledInput`<sup>Optional</sup> <a name="SmartProxyEnabledInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabledInput"></a>

```csharp
public object SmartProxyEnabledInput { get; }
```

- *Type:* object

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.authority"></a>

```csharp
public string Authority { get; }
```

- *Type:* string

---

##### `SmartProxyEnabled`<sup>Required</sup> <a name="SmartProxyEnabled" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.smartProxyEnabled"></a>

```csharp
public object SmartProxyEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public HealthcareServiceAuthenticationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceAuthenticationConfiguration">HealthcareServiceAuthenticationConfiguration</a>

---


### HealthcareServiceCorsConfigurationOutputReference <a name="HealthcareServiceCorsConfigurationOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceCorsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetMaxAgeInSeconds">ResetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowCredentials"></a>

```csharp
private void ResetAllowCredentials()
```

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedHeaders"></a>

```csharp
private void ResetAllowedHeaders()
```

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedMethods"></a>

```csharp
private void ResetAllowedMethods()
```

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetAllowedOrigins"></a>

```csharp
private void ResetAllowedOrigins()
```

##### `ResetMaxAgeInSeconds` <a name="ResetMaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```csharp
private void ResetMaxAgeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```csharp
public object AllowCredentialsInput { get; }
```

- *Type:* object

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowCredentials"></a>

```csharp
public object AllowCredentials { get; }
```

- *Type:* object

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfigurationOutputReference.property.internalValue"></a>

```csharp
public HealthcareServiceCorsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceCorsConfiguration">HealthcareServiceCorsConfiguration</a>

---


### HealthcareServiceIdentityOutputReference <a name="HealthcareServiceIdentityOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentityOutputReference.property.internalValue"></a>

```csharp
public HealthcareServiceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceIdentity">HealthcareServiceIdentity</a>

---


### HealthcareServiceTimeoutsOutputReference <a name="HealthcareServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HealthcareServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareService.HealthcareServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



