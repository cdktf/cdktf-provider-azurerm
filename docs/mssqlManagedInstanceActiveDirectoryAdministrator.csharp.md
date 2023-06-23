# `azurerm_mssql_managed_instance_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_mssql_managed_instance_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator).

# `mssqlManagedInstanceActiveDirectoryAdministrator` Submodule <a name="`mssqlManagedInstanceActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceActiveDirectoryAdministrator <a name="MssqlManagedInstanceActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator azurerm_mssql_managed_instance_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceActiveDirectoryAdministrator(Construct Scope, string Id, MssqlManagedInstanceActiveDirectoryAdministratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig">MssqlManagedInstanceActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig">MssqlManagedInstanceActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlManagedInstanceActiveDirectoryAdministratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts">MssqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```csharp
private void ResetAzureadAuthenticationOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceActiveDirectoryAdministrator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceActiveDirectoryAdministrator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceActiveDirectoryAdministrator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.loginUsernameInput">LoginUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.loginUsername">LoginUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.timeouts"></a>

```csharp
public MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```csharp
public object AzureadAuthenticationOnlyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoginUsernameInput`<sup>Optional</sup> <a name="LoginUsernameInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.loginUsernameInput"></a>

```csharp
public string LoginUsernameInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```csharp
public object AzureadAuthenticationOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoginUsername`<sup>Required</sup> <a name="LoginUsername" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.loginUsername"></a>

```csharp
public string LoginUsername { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceActiveDirectoryAdministratorConfig <a name="MssqlManagedInstanceActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceActiveDirectoryAdministratorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoginUsername,
    string ManagedInstanceId,
    string ObjectId,
    string TenantId,
    object AzureadAuthenticationOnly = null,
    string Id = null,
    MssqlManagedInstanceActiveDirectoryAdministratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.loginUsername">LoginUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#login_username MssqlManagedInstanceActiveDirectoryAdministrator#login_username}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#managed_instance_id MssqlManagedInstanceActiveDirectoryAdministrator#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#object_id MssqlManagedInstanceActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#tenant_id MssqlManagedInstanceActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#azuread_authentication_only MssqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#id MssqlManagedInstanceActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts">MssqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoginUsername`<sup>Required</sup> <a name="LoginUsername" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.loginUsername"></a>

```csharp
public string LoginUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#login_username MssqlManagedInstanceActiveDirectoryAdministrator#login_username}.

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#managed_instance_id MssqlManagedInstanceActiveDirectoryAdministrator#managed_instance_id}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#object_id MssqlManagedInstanceActiveDirectoryAdministrator#object_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#tenant_id MssqlManagedInstanceActiveDirectoryAdministrator#tenant_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```csharp
public object AzureadAuthenticationOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#azuread_authentication_only MssqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#id MssqlManagedInstanceActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts"></a>

```csharp
public MssqlManagedInstanceActiveDirectoryAdministratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts">MssqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#timeouts MssqlManagedInstanceActiveDirectoryAdministrator#timeouts}

---

### MssqlManagedInstanceActiveDirectoryAdministratorTimeouts <a name="MssqlManagedInstanceActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceActiveDirectoryAdministratorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#create MssqlManagedInstanceActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#delete MssqlManagedInstanceActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#read MssqlManagedInstanceActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#update MssqlManagedInstanceActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#create MssqlManagedInstanceActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#delete MssqlManagedInstanceActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#read MssqlManagedInstanceActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/mssql_managed_instance_active_directory_administrator#update MssqlManagedInstanceActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference <a name="MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceActiveDirectoryAdministrator.MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



