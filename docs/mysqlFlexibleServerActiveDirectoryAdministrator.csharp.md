# `azurerm_mysql_flexible_server_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_mysql_flexible_server_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator).

# `mysqlFlexibleServerActiveDirectoryAdministrator` Submodule <a name="`mysqlFlexibleServerActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlFlexibleServerActiveDirectoryAdministrator <a name="MysqlFlexibleServerActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator azurerm_mysql_flexible_server_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerActiveDirectoryAdministrator(Construct Scope, string Id, MysqlFlexibleServerActiveDirectoryAdministratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig">MysqlFlexibleServerActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig">MysqlFlexibleServerActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlFlexibleServerActiveDirectoryAdministratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServerActiveDirectoryAdministrator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServerActiveDirectoryAdministrator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MysqlFlexibleServerActiveDirectoryAdministrator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeouts"></a>

```csharp
public MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlFlexibleServerActiveDirectoryAdministratorConfig <a name="MysqlFlexibleServerActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerActiveDirectoryAdministratorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdentityId,
    string Login,
    string ObjectId,
    string ServerId,
    string TenantId,
    string Id = null,
    MysqlFlexibleServerActiveDirectoryAdministratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#identity_id MysqlFlexibleServerActiveDirectoryAdministrator#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.login">Login</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#login MysqlFlexibleServerActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#object_id MysqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#server_id MysqlFlexibleServerActiveDirectoryAdministrator#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#tenant_id MysqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#id MysqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#identity_id MysqlFlexibleServerActiveDirectoryAdministrator#identity_id}.

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#login MysqlFlexibleServerActiveDirectoryAdministrator#login}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#object_id MysqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#server_id MysqlFlexibleServerActiveDirectoryAdministrator#server_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#tenant_id MysqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#id MysqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts"></a>

```csharp
public MysqlFlexibleServerActiveDirectoryAdministratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts">MysqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#timeouts MysqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

### MysqlFlexibleServerActiveDirectoryAdministratorTimeouts <a name="MysqlFlexibleServerActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerActiveDirectoryAdministratorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#create MysqlFlexibleServerActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#delete MysqlFlexibleServerActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#read MysqlFlexibleServerActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#update MysqlFlexibleServerActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#create MysqlFlexibleServerActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#delete MysqlFlexibleServerActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#read MysqlFlexibleServerActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/mysql_flexible_server_active_directory_administrator#update MysqlFlexibleServerActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference <a name="MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServerActiveDirectoryAdministrator.MysqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



