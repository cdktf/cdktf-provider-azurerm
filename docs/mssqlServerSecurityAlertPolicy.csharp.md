# `mssqlServerSecurityAlertPolicy` Submodule <a name="`mssqlServerSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerSecurityAlertPolicy <a name="MssqlServerSecurityAlertPolicy" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy azurerm_mssql_server_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerSecurityAlertPolicy(Construct Scope, string Id, MssqlServerSecurityAlertPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig">MssqlServerSecurityAlertPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig">MssqlServerSecurityAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetDisabledAlerts">ResetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAccountAdmins">ResetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlServerSecurityAlertPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---

##### `ResetDisabledAlerts` <a name="ResetDisabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetDisabledAlerts"></a>

```csharp
private void ResetDisabledAlerts()
```

##### `ResetEmailAccountAdmins` <a name="ResetEmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAccountAdmins"></a>

```csharp
private void ResetEmailAccountAdmins()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```csharp
private void ResetStorageAccountAccessKey()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageEndpoint"></a>

```csharp
private void ResetStorageEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerSecurityAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerSecurityAlertPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerSecurityAlertPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerSecurityAlertPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerSecurityAlertPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MssqlServerSecurityAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlServerSecurityAlertPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlServerSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference">MssqlServerSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlertsInput">DisabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsInput">EmailAccountAdminsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlerts">DisabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdmins">EmailAccountAdmins</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeouts"></a>

```csharp
public MssqlServerSecurityAlertPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference">MssqlServerSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `DisabledAlertsInput`<sup>Optional</sup> <a name="DisabledAlertsInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlertsInput"></a>

```csharp
public string[] DisabledAlertsInput { get; }
```

- *Type:* string[]

---

##### `EmailAccountAdminsInput`<sup>Optional</sup> <a name="EmailAccountAdminsInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsInput"></a>

```csharp
public bool|IResolvable EmailAccountAdminsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpointInput"></a>

```csharp
public string StorageEndpointInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|MssqlServerSecurityAlertPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---

##### `DisabledAlerts`<sup>Required</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlerts"></a>

```csharp
public string[] DisabledAlerts { get; }
```

- *Type:* string[]

---

##### `EmailAccountAdmins`<sup>Required</sup> <a name="EmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdmins"></a>

```csharp
public bool|IResolvable EmailAccountAdmins { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerSecurityAlertPolicyConfig <a name="MssqlServerSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerSecurityAlertPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceGroupName,
    string ServerName,
    string State,
    string[] DisabledAlerts = null,
    bool|IResolvable EmailAccountAdmins = null,
    string[] EmailAddresses = null,
    string Id = null,
    double RetentionDays = null,
    string StorageAccountAccessKey = null,
    string StorageEndpoint = null,
    MssqlServerSecurityAlertPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.disabledAlerts">DisabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAccountAdmins">EmailAccountAdmins</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}.

---

##### `DisabledAlerts`<sup>Optional</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```csharp
public string[] DisabledAlerts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}.

---

##### `EmailAccountAdmins`<sup>Optional</sup> <a name="EmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAccountAdmins"></a>

```csharp
public bool|IResolvable EmailAccountAdmins { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.timeouts"></a>

```csharp
public MssqlServerSecurityAlertPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#timeouts MssqlServerSecurityAlertPolicy#timeouts}

---

### MssqlServerSecurityAlertPolicyTimeouts <a name="MssqlServerSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerSecurityAlertPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#create MssqlServerSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#delete MssqlServerSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#read MssqlServerSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#update MssqlServerSecurityAlertPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#create MssqlServerSecurityAlertPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#delete MssqlServerSecurityAlertPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#read MssqlServerSecurityAlertPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/mssql_server_security_alert_policy#update MssqlServerSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerSecurityAlertPolicyTimeoutsOutputReference <a name="MssqlServerSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerSecurityAlertPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MssqlServerSecurityAlertPolicyTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---



