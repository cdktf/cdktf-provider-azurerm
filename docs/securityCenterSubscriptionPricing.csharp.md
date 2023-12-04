# `securityCenterSubscriptionPricing` Submodule <a name="`securityCenterSubscriptionPricing` Submodule" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterSubscriptionPricing <a name="SecurityCenterSubscriptionPricing" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing azurerm_security_center_subscription_pricing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricing(Construct Scope, string Id, SecurityCenterSubscriptionPricingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig">SecurityCenterSubscriptionPricingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig">SecurityCenterSubscriptionPricingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetSubplan">ResetSubplan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putExtension"></a>

```csharp
private void PutExtension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putExtension.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityCenterSubscriptionPricingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

---

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetSubplan` <a name="ResetSubplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetSubplan"></a>

```csharp
private void ResetSubplan()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterSubscriptionPricing resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterSubscriptionPricing.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterSubscriptionPricing.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterSubscriptionPricing.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterSubscriptionPricing.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityCenterSubscriptionPricing resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityCenterSubscriptionPricing to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityCenterSubscriptionPricing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterSubscriptionPricing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList">SecurityCenterSubscriptionPricingExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference">SecurityCenterSubscriptionPricingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extensionInput">ExtensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplanInput">SubplanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplan">Subplan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tier">Tier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extension"></a>

```csharp
public SecurityCenterSubscriptionPricingExtensionList Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList">SecurityCenterSubscriptionPricingExtensionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeouts"></a>

```csharp
public SecurityCenterSubscriptionPricingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference">SecurityCenterSubscriptionPricingTimeoutsOutputReference</a>

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.extensionInput"></a>

```csharp
public object ExtensionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `SubplanInput`<sup>Optional</sup> <a name="SubplanInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplanInput"></a>

```csharp
public string SubplanInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Subplan`<sup>Required</sup> <a name="Subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplan"></a>

```csharp
public string Subplan { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterSubscriptionPricingConfig <a name="SecurityCenterSubscriptionPricingConfig" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Tier,
    object Extension = null,
    string Id = null,
    string ResourceType = null,
    string Subplan = null,
    SecurityCenterSubscriptionPricingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.extension">Extension</a></code> | <code>object</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.subplan">Subplan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.extension"></a>

```csharp
public object Extension { get; set; }
```

- *Type:* object

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#extension SecurityCenterSubscriptionPricing#extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}.

---

##### `Subplan`<sup>Optional</sup> <a name="Subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.subplan"></a>

```csharp
public string Subplan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.timeouts"></a>

```csharp
public SecurityCenterSubscriptionPricingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#timeouts SecurityCenterSubscriptionPricing#timeouts}

---

### SecurityCenterSubscriptionPricingExtension <a name="SecurityCenterSubscriptionPricingExtension" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricingExtension {
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalExtensionProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#name SecurityCenterSubscriptionPricing#name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.additionalExtensionProperties">AdditionalExtensionProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#additional_extension_properties SecurityCenterSubscriptionPricing#additional_extension_properties}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#name SecurityCenterSubscriptionPricing#name}.

---

##### `AdditionalExtensionProperties`<sup>Optional</sup> <a name="AdditionalExtensionProperties" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtension.property.additionalExtensionProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalExtensionProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#additional_extension_properties SecurityCenterSubscriptionPricing#additional_extension_properties}.

---

### SecurityCenterSubscriptionPricingTimeouts <a name="SecurityCenterSubscriptionPricingTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#create SecurityCenterSubscriptionPricing#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#delete SecurityCenterSubscriptionPricing#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#read SecurityCenterSubscriptionPricing#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#update SecurityCenterSubscriptionPricing#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#create SecurityCenterSubscriptionPricing#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#delete SecurityCenterSubscriptionPricing#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#read SecurityCenterSubscriptionPricing#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/security_center_subscription_pricing#update SecurityCenterSubscriptionPricing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterSubscriptionPricingExtensionList <a name="SecurityCenterSubscriptionPricingExtensionList" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricingExtensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.get"></a>

```csharp
private SecurityCenterSubscriptionPricingExtensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterSubscriptionPricingExtensionOutputReference <a name="SecurityCenterSubscriptionPricingExtensionOutputReference" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricingExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resetAdditionalExtensionProperties">ResetAdditionalExtensionProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalExtensionProperties` <a name="ResetAdditionalExtensionProperties" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.resetAdditionalExtensionProperties"></a>

```csharp
private void ResetAdditionalExtensionProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionPropertiesInput">AdditionalExtensionPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionProperties">AdditionalExtensionProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExtensionPropertiesInput`<sup>Optional</sup> <a name="AdditionalExtensionPropertiesInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalExtensionPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AdditionalExtensionProperties`<sup>Required</sup> <a name="AdditionalExtensionProperties" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.additionalExtensionProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalExtensionProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingExtensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterSubscriptionPricingTimeoutsOutputReference <a name="SecurityCenterSubscriptionPricingTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterSubscriptionPricingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



