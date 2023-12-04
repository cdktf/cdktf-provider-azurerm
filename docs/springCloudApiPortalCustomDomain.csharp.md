# `springCloudApiPortalCustomDomain` Submodule <a name="`springCloudApiPortalCustomDomain` Submodule" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApiPortalCustomDomain <a name="SpringCloudApiPortalCustomDomain" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain azurerm_spring_cloud_api_portal_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApiPortalCustomDomain(Construct Scope, string Id, SpringCloudApiPortalCustomDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig">SpringCloudApiPortalCustomDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig">SpringCloudApiPortalCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudApiPortalCustomDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts">SpringCloudApiPortalCustomDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetThumbprint"></a>

```csharp
private void ResetThumbprint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudApiPortalCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApiPortalCustomDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApiPortalCustomDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApiPortalCustomDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApiPortalCustomDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudApiPortalCustomDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudApiPortalCustomDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudApiPortalCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudApiPortalCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference">SpringCloudApiPortalCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalIdInput">SpringCloudApiPortalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalId">SpringCloudApiPortalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeouts"></a>

```csharp
public SpringCloudApiPortalCustomDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference">SpringCloudApiPortalCustomDomainTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpringCloudApiPortalIdInput`<sup>Optional</sup> <a name="SpringCloudApiPortalIdInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalIdInput"></a>

```csharp
public string SpringCloudApiPortalIdInput { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpringCloudApiPortalId`<sup>Required</sup> <a name="SpringCloudApiPortalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalId"></a>

```csharp
public string SpringCloudApiPortalId { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApiPortalCustomDomainConfig <a name="SpringCloudApiPortalCustomDomainConfig" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApiPortalCustomDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudApiPortalId,
    string Id = null,
    string Thumbprint = null,
    SpringCloudApiPortalCustomDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#name SpringCloudApiPortalCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.springCloudApiPortalId">SpringCloudApiPortalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#spring_cloud_api_portal_id SpringCloudApiPortalCustomDomain#spring_cloud_api_portal_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#id SpringCloudApiPortalCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#thumbprint SpringCloudApiPortalCustomDomain#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts">SpringCloudApiPortalCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#name SpringCloudApiPortalCustomDomain#name}.

---

##### `SpringCloudApiPortalId`<sup>Required</sup> <a name="SpringCloudApiPortalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.springCloudApiPortalId"></a>

```csharp
public string SpringCloudApiPortalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#spring_cloud_api_portal_id SpringCloudApiPortalCustomDomain#spring_cloud_api_portal_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#id SpringCloudApiPortalCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#thumbprint SpringCloudApiPortalCustomDomain#thumbprint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.timeouts"></a>

```csharp
public SpringCloudApiPortalCustomDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts">SpringCloudApiPortalCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#timeouts SpringCloudApiPortalCustomDomain#timeouts}

---

### SpringCloudApiPortalCustomDomainTimeouts <a name="SpringCloudApiPortalCustomDomainTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApiPortalCustomDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#create SpringCloudApiPortalCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#delete SpringCloudApiPortalCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#read SpringCloudApiPortalCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#update SpringCloudApiPortalCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#create SpringCloudApiPortalCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#delete SpringCloudApiPortalCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#read SpringCloudApiPortalCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/spring_cloud_api_portal_custom_domain#update SpringCloudApiPortalCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApiPortalCustomDomainTimeoutsOutputReference <a name="SpringCloudApiPortalCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApiPortalCustomDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



