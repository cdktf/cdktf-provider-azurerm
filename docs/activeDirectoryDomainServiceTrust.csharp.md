# `activeDirectoryDomainServiceTrust` Submodule <a name="`activeDirectoryDomainServiceTrust` Submodule" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainServiceTrust <a name="ActiveDirectoryDomainServiceTrust" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust azurerm_active_directory_domain_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceTrust(Construct Scope, string Id, ActiveDirectoryDomainServiceTrustConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig">ActiveDirectoryDomainServiceTrustConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig">ActiveDirectoryDomainServiceTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts"></a>

```csharp
private void PutTimeouts(ActiveDirectoryDomainServiceTrustTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActiveDirectoryDomainServiceTrust resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainServiceTrust.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainServiceTrust.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainServiceTrust.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainServiceTrust.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActiveDirectoryDomainServiceTrust resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActiveDirectoryDomainServiceTrust to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActiveDirectoryDomainServiceTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomainServiceTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference">ActiveDirectoryDomainServiceTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceIdInput">DomainServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIpsInput">TrustedDomainDnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdnInput">TrustedDomainFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceId">DomainServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIps">TrustedDomainDnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdn">TrustedDomainFqdn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainServiceTrustTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference">ActiveDirectoryDomainServiceTrustTimeoutsOutputReference</a>

---

##### `DomainServiceIdInput`<sup>Optional</sup> <a name="DomainServiceIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceIdInput"></a>

```csharp
public string DomainServiceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustedDomainDnsIpsInput`<sup>Optional</sup> <a name="TrustedDomainDnsIpsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIpsInput"></a>

```csharp
public string[] TrustedDomainDnsIpsInput { get; }
```

- *Type:* string[]

---

##### `TrustedDomainFqdnInput`<sup>Optional</sup> <a name="TrustedDomainFqdnInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdnInput"></a>

```csharp
public string TrustedDomainFqdnInput { get; }
```

- *Type:* string

---

##### `DomainServiceId`<sup>Required</sup> <a name="DomainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceId"></a>

```csharp
public string DomainServiceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `TrustedDomainDnsIps`<sup>Required</sup> <a name="TrustedDomainDnsIps" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIps"></a>

```csharp
public string[] TrustedDomainDnsIps { get; }
```

- *Type:* string[]

---

##### `TrustedDomainFqdn`<sup>Required</sup> <a name="TrustedDomainFqdn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdn"></a>

```csharp
public string TrustedDomainFqdn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceTrustConfig <a name="ActiveDirectoryDomainServiceTrustConfig" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceTrustConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainServiceId,
    string Name,
    string Password,
    string[] TrustedDomainDnsIps,
    string TrustedDomainFqdn,
    string Id = null,
    ActiveDirectoryDomainServiceTrustTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.domainServiceId">DomainServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#domain_service_id ActiveDirectoryDomainServiceTrust#domain_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#name ActiveDirectoryDomainServiceTrust#name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#password ActiveDirectoryDomainServiceTrust#password}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainDnsIps">TrustedDomainDnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#trusted_domain_dns_ips ActiveDirectoryDomainServiceTrust#trusted_domain_dns_ips}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainFqdn">TrustedDomainFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#trusted_domain_fqdn ActiveDirectoryDomainServiceTrust#trusted_domain_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#id ActiveDirectoryDomainServiceTrust#id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainServiceId`<sup>Required</sup> <a name="DomainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.domainServiceId"></a>

```csharp
public string DomainServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#domain_service_id ActiveDirectoryDomainServiceTrust#domain_service_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#name ActiveDirectoryDomainServiceTrust#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#password ActiveDirectoryDomainServiceTrust#password}.

---

##### `TrustedDomainDnsIps`<sup>Required</sup> <a name="TrustedDomainDnsIps" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainDnsIps"></a>

```csharp
public string[] TrustedDomainDnsIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#trusted_domain_dns_ips ActiveDirectoryDomainServiceTrust#trusted_domain_dns_ips}.

---

##### `TrustedDomainFqdn`<sup>Required</sup> <a name="TrustedDomainFqdn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainFqdn"></a>

```csharp
public string TrustedDomainFqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#trusted_domain_fqdn ActiveDirectoryDomainServiceTrust#trusted_domain_fqdn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#id ActiveDirectoryDomainServiceTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainServiceTrustTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#timeouts ActiveDirectoryDomainServiceTrust#timeouts}

---

### ActiveDirectoryDomainServiceTrustTimeouts <a name="ActiveDirectoryDomainServiceTrustTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceTrustTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#create ActiveDirectoryDomainServiceTrust#create}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#delete ActiveDirectoryDomainServiceTrust#delete}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#read ActiveDirectoryDomainServiceTrust#read}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#update ActiveDirectoryDomainServiceTrust#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#create ActiveDirectoryDomainServiceTrust#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#delete ActiveDirectoryDomainServiceTrust#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#read ActiveDirectoryDomainServiceTrust#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/active_directory_domain_service_trust#update ActiveDirectoryDomainServiceTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceTrustTimeoutsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceTrustTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



