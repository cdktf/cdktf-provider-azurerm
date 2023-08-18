# `azurerm_cosmosdb_sql_role_definition`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_sql_role_definition`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition).

# `cosmosdbSqlRoleDefinition` Submodule <a name="`cosmosdbSqlRoleDefinition` Submodule" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbSqlRoleDefinition <a name="CosmosdbSqlRoleDefinition" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

new cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition(scope: Construct, id: string, config: CosmosdbSqlRoleDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig">CosmosdbSqlRoleDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig">CosmosdbSqlRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetRoleDefinitionId">resetRoleDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | CosmosdbSqlRoleDefinitionPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbSqlRoleDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoleDefinitionId` <a name="resetRoleDefinitionId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetRoleDefinitionId"></a>

```typescript
public resetRoleDefinitionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList">CosmosdbSqlRoleDefinitionPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference">CosmosdbSqlRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopesInput">assignableScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissionsInput">permissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopes">assignableScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissions"></a>

```typescript
public readonly permissions: CosmosdbSqlRoleDefinitionPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList">CosmosdbSqlRoleDefinitionPermissionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbSqlRoleDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference">CosmosdbSqlRoleDefinitionTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `assignableScopesInput`<sup>Optional</sup> <a name="assignableScopesInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopesInput"></a>

```typescript
public readonly assignableScopesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | CosmosdbSqlRoleDefinitionPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionIdInput"></a>

```typescript
public readonly roleDefinitionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbSqlRoleDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `assignableScopes`<sup>Required</sup> <a name="assignableScopes" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.assignableScopes"></a>

```typescript
public readonly assignableScopes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbSqlRoleDefinitionConfig <a name="CosmosdbSqlRoleDefinitionConfig" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

const cosmosdbSqlRoleDefinitionConfig: cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.assignableScopes">assignableScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]</code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#id CosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}.

---

##### `assignableScopes`<sup>Required</sup> <a name="assignableScopes" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.assignableScopes"></a>

```typescript
public readonly assignableScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | CosmosdbSqlRoleDefinitionPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#permissions CosmosdbSqlRoleDefinition#permissions}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#id CosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleDefinitionId`<sup>Optional</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbSqlRoleDefinitionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#timeouts CosmosdbSqlRoleDefinition#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}.

---

### CosmosdbSqlRoleDefinitionPermissions <a name="CosmosdbSqlRoleDefinitionPermissions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

const cosmosdbSqlRoleDefinitionPermissions: cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions.property.dataActions">dataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#data_actions CosmosdbSqlRoleDefinition#data_actions}. |

---

##### `dataActions`<sup>Required</sup> <a name="dataActions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions.property.dataActions"></a>

```typescript
public readonly dataActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#data_actions CosmosdbSqlRoleDefinition#data_actions}.

---

### CosmosdbSqlRoleDefinitionTimeouts <a name="CosmosdbSqlRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

const cosmosdbSqlRoleDefinitionTimeouts: cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#create CosmosdbSqlRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#delete CosmosdbSqlRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#read CosmosdbSqlRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#update CosmosdbSqlRoleDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#create CosmosdbSqlRoleDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#delete CosmosdbSqlRoleDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#read CosmosdbSqlRoleDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/cosmosdb_sql_role_definition#update CosmosdbSqlRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbSqlRoleDefinitionPermissionsList <a name="CosmosdbSqlRoleDefinitionPermissionsList" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

new cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.get"></a>

```typescript
public get(index: number): CosmosdbSqlRoleDefinitionPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbSqlRoleDefinitionPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>[]

---


### CosmosdbSqlRoleDefinitionPermissionsOutputReference <a name="CosmosdbSqlRoleDefinitionPermissionsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

new cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActionsInput">dataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions">dataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataActionsInput`<sup>Optional</sup> <a name="dataActionsInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActionsInput"></a>

```typescript
public readonly dataActionsInput: string[];
```

- *Type:* string[]

---

##### `dataActions`<sup>Required</sup> <a name="dataActions" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions"></a>

```typescript
public readonly dataActions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbSqlRoleDefinitionPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionPermissions">CosmosdbSqlRoleDefinitionPermissions</a>

---


### CosmosdbSqlRoleDefinitionTimeoutsOutputReference <a name="CosmosdbSqlRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbSqlRoleDefinition } from '@cdktf/provider-azurerm'

new cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbSqlRoleDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbSqlRoleDefinition.CosmosdbSqlRoleDefinitionTimeouts">CosmosdbSqlRoleDefinitionTimeouts</a>

---



