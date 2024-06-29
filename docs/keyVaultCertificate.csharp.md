# `keyVaultCertificate` Submodule <a name="`keyVaultCertificate` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificate <a name="KeyVaultCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificate(Construct Scope, string Id, KeyVaultCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig">KeyVaultCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig">KeyVaultCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy">PutCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificatePolicy">ResetCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate"></a>

```csharp
private void PutCertificate(KeyVaultCertificateCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---

##### `PutCertificatePolicy` <a name="PutCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy"></a>

```csharp
private void PutCertificatePolicy(KeyVaultCertificateCertificatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyVaultCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCertificatePolicy` <a name="ResetCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificatePolicy"></a>

```csharp
private void ResetCertificatePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference">KeyVaultCertificateCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateAttribute">CertificateAttribute</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList">KeyVaultCertificateCertificateAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateData">CertificateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateDataBase64">CertificateDataBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicy">CertificatePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference">KeyVaultCertificateCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerId">ResourceManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerVersionlessId">ResourceManagerVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference">KeyVaultCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessId">VersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessSecretId">VersionlessSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicyInput">CertificatePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificate"></a>

```csharp
public KeyVaultCertificateCertificateOutputReference Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference">KeyVaultCertificateCertificateOutputReference</a>

---

##### `CertificateAttribute`<sup>Required</sup> <a name="CertificateAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateAttribute"></a>

```csharp
public KeyVaultCertificateCertificateAttributeList CertificateAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList">KeyVaultCertificateCertificateAttributeList</a>

---

##### `CertificateData`<sup>Required</sup> <a name="CertificateData" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateData"></a>

```csharp
public string CertificateData { get; }
```

- *Type:* string

---

##### `CertificateDataBase64`<sup>Required</sup> <a name="CertificateDataBase64" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateDataBase64"></a>

```csharp
public string CertificateDataBase64 { get; }
```

- *Type:* string

---

##### `CertificatePolicy`<sup>Required</sup> <a name="CertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicy"></a>

```csharp
public KeyVaultCertificateCertificatePolicyOutputReference CertificatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference">KeyVaultCertificateCertificatePolicyOutputReference</a>

---

##### `ResourceManagerId`<sup>Required</sup> <a name="ResourceManagerId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerId"></a>

```csharp
public string ResourceManagerId { get; }
```

- *Type:* string

---

##### `ResourceManagerVersionlessId`<sup>Required</sup> <a name="ResourceManagerVersionlessId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerVersionlessId"></a>

```csharp
public string ResourceManagerVersionlessId { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeouts"></a>

```csharp
public KeyVaultCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference">KeyVaultCertificateTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionlessId`<sup>Required</sup> <a name="VersionlessId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessId"></a>

```csharp
public string VersionlessId { get; }
```

- *Type:* string

---

##### `VersionlessSecretId`<sup>Required</sup> <a name="VersionlessSecretId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessSecretId"></a>

```csharp
public string VersionlessSecretId { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateInput"></a>

```csharp
public KeyVaultCertificateCertificate CertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---

##### `CertificatePolicyInput`<sup>Optional</sup> <a name="CertificatePolicyInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicyInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicy CertificatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateCertificate <a name="KeyVaultCertificateCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificate {
    string Contents,
    string Password = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.contents">Contents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.contents"></a>

```csharp
public string Contents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}.

---

### KeyVaultCertificateCertificateAttribute <a name="KeyVaultCertificateCertificateAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificateAttribute {

};
```


### KeyVaultCertificateCertificatePolicy <a name="KeyVaultCertificateCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicy {
    KeyVaultCertificateCertificatePolicyIssuerParameters IssuerParameters,
    KeyVaultCertificateCertificatePolicyKeyProperties KeyProperties,
    KeyVaultCertificateCertificatePolicySecretProperties SecretProperties,
    object LifetimeAction = null,
    KeyVaultCertificateCertificatePolicyX509CertificateProperties X509CertificateProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.issuerParameters">IssuerParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | issuer_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.keyProperties">KeyProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | key_properties block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.secretProperties">SecretProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | secret_properties block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.lifetimeAction">LifetimeAction</a></code> | <code>object</code> | lifetime_action block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.x509CertificateProperties">X509CertificateProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | x509_certificate_properties block. |

---

##### `IssuerParameters`<sup>Required</sup> <a name="IssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.issuerParameters"></a>

```csharp
public KeyVaultCertificateCertificatePolicyIssuerParameters IssuerParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

issuer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#issuer_parameters KeyVaultCertificate#issuer_parameters}

---

##### `KeyProperties`<sup>Required</sup> <a name="KeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.keyProperties"></a>

```csharp
public KeyVaultCertificateCertificatePolicyKeyProperties KeyProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_properties KeyVaultCertificate#key_properties}

---

##### `SecretProperties`<sup>Required</sup> <a name="SecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.secretProperties"></a>

```csharp
public KeyVaultCertificateCertificatePolicySecretProperties SecretProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

secret_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#secret_properties KeyVaultCertificate#secret_properties}

---

##### `LifetimeAction`<sup>Optional</sup> <a name="LifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.lifetimeAction"></a>

```csharp
public object LifetimeAction { get; set; }
```

- *Type:* object

lifetime_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#lifetime_action KeyVaultCertificate#lifetime_action}

---

##### `X509CertificateProperties`<sup>Optional</sup> <a name="X509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.x509CertificateProperties"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificateProperties X509CertificateProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

x509_certificate_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}

---

### KeyVaultCertificateCertificatePolicyIssuerParameters <a name="KeyVaultCertificateCertificatePolicyIssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyIssuerParameters {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

### KeyVaultCertificateCertificatePolicyKeyProperties <a name="KeyVaultCertificateCertificatePolicyKeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyKeyProperties {
    object Exportable,
    string KeyType,
    object ReuseKey,
    string Curve = null,
    double KeySize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.exportable">Exportable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keyType">KeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.reuseKey">ReuseKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.curve">Curve</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keySize">KeySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}. |

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.exportable"></a>

```csharp
public object Exportable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}.

---

##### `ReuseKey`<sup>Required</sup> <a name="ReuseKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.reuseKey"></a>

```csharp
public object ReuseKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}.

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.curve"></a>

```csharp
public string Curve { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}.

---

### KeyVaultCertificateCertificatePolicyLifetimeAction <a name="KeyVaultCertificateCertificatePolicyLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeAction {
    KeyVaultCertificateCertificatePolicyLifetimeActionAction Action,
    KeyVaultCertificateCertificatePolicyLifetimeActionTrigger Trigger
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | trigger block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.action"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#action KeyVaultCertificate#action}

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.trigger"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#trigger KeyVaultCertificate#trigger}

---

### KeyVaultCertificateCertificatePolicyLifetimeActionAction <a name="KeyVaultCertificateCertificatePolicyLifetimeActionAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeActionAction {
    string ActionType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}. |

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}.

---

### KeyVaultCertificateCertificatePolicyLifetimeActionTrigger <a name="KeyVaultCertificateCertificatePolicyLifetimeActionTrigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
    double DaysBeforeExpiry = null,
    double LifetimePercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.daysBeforeExpiry">DaysBeforeExpiry</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.lifetimePercentage">LifetimePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}. |

---

##### `DaysBeforeExpiry`<sup>Optional</sup> <a name="DaysBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.daysBeforeExpiry"></a>

```csharp
public double DaysBeforeExpiry { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}.

---

##### `LifetimePercentage`<sup>Optional</sup> <a name="LifetimePercentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.lifetimePercentage"></a>

```csharp
public double LifetimePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}.

---

### KeyVaultCertificateCertificatePolicySecretProperties <a name="KeyVaultCertificateCertificatePolicySecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicySecretProperties {
    string ContentType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}.

---

### KeyVaultCertificateCertificatePolicyX509CertificateProperties <a name="KeyVaultCertificateCertificatePolicyX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyX509CertificateProperties {
    string[] KeyUsage,
    string Subject,
    double ValidityInMonths,
    string[] ExtendedKeyUsage = null,
    KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames SubjectAlternativeNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.keyUsage">KeyUsage</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.validityInMonths">ValidityInMonths</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.keyUsage"></a>

```csharp
public string[] KeyUsage { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}.

---

##### `ValidityInMonths`<sup>Required</sup> <a name="ValidityInMonths" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.validityInMonths"></a>

```csharp
public double ValidityInMonths { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}.

---

##### `ExtendedKeyUsage`<sup>Optional</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.extendedKeyUsage"></a>

```csharp
public string[] ExtendedKeyUsage { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}.

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subjectAlternativeNames"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames SubjectAlternativeNames { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#subject_alternative_names KeyVaultCertificate#subject_alternative_names}

---

### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
    string[] DnsNames = null,
    string[] Emails = null,
    string[] Upns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.dnsNames">DnsNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.emails">Emails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.upns">Upns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}. |

---

##### `DnsNames`<sup>Optional</sup> <a name="DnsNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.dnsNames"></a>

```csharp
public string[] DnsNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}.

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.emails"></a>

```csharp
public string[] Emails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}.

---

##### `Upns`<sup>Optional</sup> <a name="Upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.upns"></a>

```csharp
public string[] Upns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}.

---

### KeyVaultCertificateConfig <a name="KeyVaultCertificateConfig" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyVaultId,
    string Name,
    KeyVaultCertificateCertificate Certificate = null,
    KeyVaultCertificateCertificatePolicy CertificatePolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    KeyVaultCertificateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificatePolicy">CertificatePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | certificate_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificate"></a>

```csharp
public KeyVaultCertificateCertificate Certificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#certificate KeyVaultCertificate#certificate}

---

##### `CertificatePolicy`<sup>Optional</sup> <a name="CertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificatePolicy"></a>

```csharp
public KeyVaultCertificateCertificatePolicy CertificatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

certificate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#certificate_policy KeyVaultCertificate#certificate_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.timeouts"></a>

```csharp
public KeyVaultCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#timeouts KeyVaultCertificate#timeouts}

---

### KeyVaultCertificateTimeouts <a name="KeyVaultCertificateTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateCertificateAttributeList <a name="KeyVaultCertificateCertificateAttributeList" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificateAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get"></a>

```csharp
private KeyVaultCertificateCertificateAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### KeyVaultCertificateCertificateAttributeOutputReference <a name="KeyVaultCertificateCertificateAttributeOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificateAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.notBefore">NotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.recoveryLevel">RecoveryLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute">KeyVaultCertificateCertificateAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.notBefore"></a>

```csharp
public string NotBefore { get; }
```

- *Type:* string

---

##### `RecoveryLevel`<sup>Required</sup> <a name="RecoveryLevel" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.recoveryLevel"></a>

```csharp
public string RecoveryLevel { get; }
```

- *Type:* string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificateAttribute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute">KeyVaultCertificateCertificateAttribute</a>

---


### KeyVaultCertificateCertificateOutputReference <a name="KeyVaultCertificateCertificateOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contentsInput"></a>

```csharp
public string ContentsInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---


### KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference <a name="KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicyIssuerParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---


### KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetKeySize">ResetKeySize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetCurve"></a>

```csharp
private void ResetCurve()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetKeySize"></a>

```csharp
private void ResetKeySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curveInput">CurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportableInput">ExportableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKeyInput">ReuseKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve">Curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable">Exportable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey">ReuseKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curveInput"></a>

```csharp
public string CurveInput { get; }
```

- *Type:* string

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportableInput"></a>

```csharp
public object ExportableInput { get; }
```

- *Type:* object

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `ReuseKeyInput`<sup>Optional</sup> <a name="ReuseKeyInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKeyInput"></a>

```csharp
public object ReuseKeyInput { get; }
```

- *Type:* object

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve"></a>

```csharp
public string Curve { get; }
```

- *Type:* string

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable"></a>

```csharp
public object Exportable { get; }
```

- *Type:* object

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `ReuseKey`<sup>Required</sup> <a name="ReuseKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey"></a>

```csharp
public object ReuseKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicyKeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---


### KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---


### KeyVaultCertificateCertificatePolicyLifetimeActionList <a name="KeyVaultCertificateCertificatePolicyLifetimeActionList" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get"></a>

```csharp
private KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction"></a>

```csharp
private void PutAction(KeyVaultCertificateCertificatePolicyLifetimeActionAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(KeyVaultCertificateCertificatePolicyLifetimeActionTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.actionInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.triggerInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetDaysBeforeExpiry">ResetDaysBeforeExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetLifetimePercentage">ResetLifetimePercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysBeforeExpiry` <a name="ResetDaysBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetDaysBeforeExpiry"></a>

```csharp
private void ResetDaysBeforeExpiry()
```

##### `ResetLifetimePercentage` <a name="ResetLifetimePercentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetLifetimePercentage"></a>

```csharp
private void ResetLifetimePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiryInput">DaysBeforeExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentageInput">LifetimePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry">DaysBeforeExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage">LifetimePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysBeforeExpiryInput`<sup>Optional</sup> <a name="DaysBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiryInput"></a>

```csharp
public double DaysBeforeExpiryInput { get; }
```

- *Type:* double

---

##### `LifetimePercentageInput`<sup>Optional</sup> <a name="LifetimePercentageInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentageInput"></a>

```csharp
public double LifetimePercentageInput { get; }
```

- *Type:* double

---

##### `DaysBeforeExpiry`<sup>Required</sup> <a name="DaysBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry"></a>

```csharp
public double DaysBeforeExpiry { get; }
```

- *Type:* double

---

##### `LifetimePercentage`<sup>Required</sup> <a name="LifetimePercentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage"></a>

```csharp
public double LifetimePercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


### KeyVaultCertificateCertificatePolicyOutputReference <a name="KeyVaultCertificateCertificatePolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters">PutIssuerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties">PutKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction">PutLifetimeAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties">PutSecretProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties">PutX509CertificateProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetLifetimeAction">ResetLifetimeAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetX509CertificateProperties">ResetX509CertificateProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIssuerParameters` <a name="PutIssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters"></a>

```csharp
private void PutIssuerParameters(KeyVaultCertificateCertificatePolicyIssuerParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---

##### `PutKeyProperties` <a name="PutKeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties"></a>

```csharp
private void PutKeyProperties(KeyVaultCertificateCertificatePolicyKeyProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---

##### `PutLifetimeAction` <a name="PutLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction"></a>

```csharp
private void PutLifetimeAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction.parameter.value"></a>

- *Type:* object

---

##### `PutSecretProperties` <a name="PutSecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties"></a>

```csharp
private void PutSecretProperties(KeyVaultCertificateCertificatePolicySecretProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---

##### `PutX509CertificateProperties` <a name="PutX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties"></a>

```csharp
private void PutX509CertificateProperties(KeyVaultCertificateCertificatePolicyX509CertificateProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---

##### `ResetLifetimeAction` <a name="ResetLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetLifetimeAction"></a>

```csharp
private void ResetLifetimeAction()
```

##### `ResetX509CertificateProperties` <a name="ResetX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetX509CertificateProperties"></a>

```csharp
private void ResetX509CertificateProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters">IssuerParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference">KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties">KeyProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference">KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction">LifetimeAction</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList">KeyVaultCertificateCertificatePolicyLifetimeActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties">SecretProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference">KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties">X509CertificateProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParametersInput">IssuerParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyPropertiesInput">KeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeActionInput">LifetimeActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretPropertiesInput">SecretPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificatePropertiesInput">X509CertificatePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IssuerParameters`<sup>Required</sup> <a name="IssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters"></a>

```csharp
public KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference IssuerParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference">KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference</a>

---

##### `KeyProperties`<sup>Required</sup> <a name="KeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties"></a>

```csharp
public KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference KeyProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference">KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference</a>

---

##### `LifetimeAction`<sup>Required</sup> <a name="LifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction"></a>

```csharp
public KeyVaultCertificateCertificatePolicyLifetimeActionList LifetimeAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList">KeyVaultCertificateCertificatePolicyLifetimeActionList</a>

---

##### `SecretProperties`<sup>Required</sup> <a name="SecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties"></a>

```csharp
public KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference SecretProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference">KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference</a>

---

##### `X509CertificateProperties`<sup>Required</sup> <a name="X509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference X509CertificateProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference</a>

---

##### `IssuerParametersInput`<sup>Optional</sup> <a name="IssuerParametersInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParametersInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicyIssuerParameters IssuerParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---

##### `KeyPropertiesInput`<sup>Optional</sup> <a name="KeyPropertiesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyPropertiesInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicyKeyProperties KeyPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---

##### `LifetimeActionInput`<sup>Optional</sup> <a name="LifetimeActionInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeActionInput"></a>

```csharp
public object LifetimeActionInput { get; }
```

- *Type:* object

---

##### `SecretPropertiesInput`<sup>Optional</sup> <a name="SecretPropertiesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretPropertiesInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicySecretProperties SecretPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---

##### `X509CertificatePropertiesInput`<sup>Optional</sup> <a name="X509CertificatePropertiesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificatePropertiesInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificateProperties X509CertificatePropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---


### KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicySecretProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---


### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames">PutSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetExtendedKeyUsage">ResetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubjectAlternativeNames` <a name="PutSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames"></a>

```csharp
private void PutSubjectAlternativeNames(KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---

##### `ResetExtendedKeyUsage` <a name="ResetExtendedKeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetExtendedKeyUsage"></a>

```csharp
private void ResetExtendedKeyUsage()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonthsInput">ValidityInMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage">KeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths">ValidityInMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference SubjectAlternativeNames { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsageInput"></a>

```csharp
public string[] ExtendedKeyUsageInput { get; }
```

- *Type:* string[]

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsageInput"></a>

```csharp
public string[] KeyUsageInput { get; }
```

- *Type:* string[]

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNamesInput"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames SubjectAlternativeNamesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `ValidityInMonthsInput`<sup>Optional</sup> <a name="ValidityInMonthsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonthsInput"></a>

```csharp
public double ValidityInMonthsInput { get; }
```

- *Type:* double

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage"></a>

```csharp
public string[] ExtendedKeyUsage { get; }
```

- *Type:* string[]

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage"></a>

```csharp
public string[] KeyUsage { get; }
```

- *Type:* string[]

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `ValidityInMonths`<sup>Required</sup> <a name="ValidityInMonths" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths"></a>

```csharp
public double ValidityInMonths { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificateProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---


### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetDnsNames">ResetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetEmails">ResetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetUpns">ResetUpns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsNames` <a name="ResetDnsNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetDnsNames"></a>

```csharp
private void ResetDnsNames()
```

##### `ResetEmails` <a name="ResetEmails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetEmails"></a>

```csharp
private void ResetEmails()
```

##### `ResetUpns` <a name="ResetUpns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetUpns"></a>

```csharp
private void ResetUpns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNamesInput">DnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emailsInput">EmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upnsInput">UpnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames">DnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails">Emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns">Upns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsNamesInput`<sup>Optional</sup> <a name="DnsNamesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNamesInput"></a>

```csharp
public string[] DnsNamesInput { get; }
```

- *Type:* string[]

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emailsInput"></a>

```csharp
public string[] EmailsInput { get; }
```

- *Type:* string[]

---

##### `UpnsInput`<sup>Optional</sup> <a name="UpnsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upnsInput"></a>

```csharp
public string[] UpnsInput { get; }
```

- *Type:* string[]

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames"></a>

```csharp
public string[] DnsNames { get; }
```

- *Type:* string[]

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails"></a>

```csharp
public string[] Emails { get; }
```

- *Type:* string[]

---

##### `Upns`<sup>Required</sup> <a name="Upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns"></a>

```csharp
public string[] Upns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```csharp
public KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---


### KeyVaultCertificateTimeoutsOutputReference <a name="KeyVaultCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



