# `azurerm_postgresql_flexible_server_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_postgresql_flexible_server_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator).

# `postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule <a name="`postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministrator <a name="PostgresqlFlexibleServerActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator azurerm_postgresql_flexible_server_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerActiveDirectoryAdministrator(Construct Scope, string Id, PostgresqlFlexibleServerActiveDirectoryAdministratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig">PostgresqlFlexibleServerActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig">PostgresqlFlexibleServerActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts"></a>

```csharp
private void PutTimeouts(PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerActiveDirectoryAdministrator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerActiveDirectoryAdministrator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerActiveDirectoryAdministrator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput">PrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName">PrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts"></a>

```csharp
public PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `PrincipalNameInput`<sup>Optional</sup> <a name="PrincipalNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput"></a>

```csharp
public string PrincipalNameInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName"></a>

```csharp
public string PrincipalName { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorConfig <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerActiveDirectoryAdministratorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ObjectId,
    string PrincipalName,
    string PrincipalType,
    string ResourceGroupName,
    string ServerName,
    string TenantId,
    string Id = null,
    PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName">PrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName"></a>

```csharp
public string PrincipalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}.

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts"></a>

```csharp
public PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#timeouts PostgresqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#update PostgresqlFlexibleServerActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/postgresql_flexible_server_active_directory_administrator#update PostgresqlFlexibleServerActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



