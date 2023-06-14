# `azurerm_cosmosdb_sql_stored_procedure`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_sql_stored_procedure`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure).

# `cosmosdbSqlStoredProcedure` Submodule <a name="`cosmosdbSqlStoredProcedure` Submodule" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbSqlStoredProcedure <a name="CosmosdbSqlStoredProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure azurerm_cosmosdb_sql_stored_procedure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

new cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure(scope: Construct, id: string, config: CosmosdbSqlStoredProcedureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig">CosmosdbSqlStoredProcedureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig">CosmosdbSqlStoredProcedureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbSqlStoredProcedureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isConstruct"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformElement"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformResource"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference">CosmosdbSqlStoredProcedureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbSqlStoredProcedureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference">CosmosdbSqlStoredProcedureTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CosmosdbSqlStoredProcedureTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a> | cdktf.IResolvable

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbSqlStoredProcedureConfig <a name="CosmosdbSqlStoredProcedureConfig" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.Initializer"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

const cosmosdbSqlStoredProcedureConfig: cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#account_name CosmosdbSqlStoredProcedure#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#body CosmosdbSqlStoredProcedure#body}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#container_name CosmosdbSqlStoredProcedure#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#database_name CosmosdbSqlStoredProcedure#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#name CosmosdbSqlStoredProcedure#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#resource_group_name CosmosdbSqlStoredProcedure#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#id CosmosdbSqlStoredProcedure#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#account_name CosmosdbSqlStoredProcedure#account_name}.

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#body CosmosdbSqlStoredProcedure#body}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#container_name CosmosdbSqlStoredProcedure#container_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#database_name CosmosdbSqlStoredProcedure#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#name CosmosdbSqlStoredProcedure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#resource_group_name CosmosdbSqlStoredProcedure#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#id CosmosdbSqlStoredProcedure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbSqlStoredProcedureTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#timeouts CosmosdbSqlStoredProcedure#timeouts}

---

### CosmosdbSqlStoredProcedureTimeouts <a name="CosmosdbSqlStoredProcedureTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.Initializer"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

const cosmosdbSqlStoredProcedureTimeouts: cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#create CosmosdbSqlStoredProcedure#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#delete CosmosdbSqlStoredProcedure#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#read CosmosdbSqlStoredProcedure#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#update CosmosdbSqlStoredProcedure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#create CosmosdbSqlStoredProcedure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#delete CosmosdbSqlStoredProcedure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#read CosmosdbSqlStoredProcedure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_sql_stored_procedure#update CosmosdbSqlStoredProcedure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbSqlStoredProcedureTimeoutsOutputReference <a name="CosmosdbSqlStoredProcedureTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbSqlStoredProcedure } from '@cdktf/provider-azurerm'

new cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbSqlStoredProcedureTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlStoredProcedure.CosmosdbSqlStoredProcedureTimeouts">CosmosdbSqlStoredProcedureTimeouts</a> | cdktf.IResolvable

---



