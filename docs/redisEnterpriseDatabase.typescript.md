# `azurerm_redis_enterprise_database`

Refer to the Terraform Registory for docs: [`azurerm_redis_enterprise_database`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database).

# `redisEnterpriseDatabase` Submodule <a name="`redisEnterpriseDatabase` Submodule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisEnterpriseDatabase <a name="RedisEnterpriseDatabase" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database azurerm_redis_enterprise_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

new redisEnterpriseDatabase.RedisEnterpriseDatabase(scope: Construct, id: string, config: RedisEnterpriseDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig">RedisEnterpriseDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig">RedisEnterpriseDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule">putModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClientProtocol">resetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClusteringPolicy">resetClusteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseGroupNickname">resetLinkedDatabaseGroupNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseId">resetLinkedDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetModule">resetModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putModule` <a name="putModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule"></a>

```typescript
public putModule(value: IResolvable | RedisEnterpriseDatabaseModule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: RedisEnterpriseDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

---

##### `resetClientProtocol` <a name="resetClientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClientProtocol"></a>

```typescript
public resetClientProtocol(): void
```

##### `resetClusteringPolicy` <a name="resetClusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClusteringPolicy"></a>

```typescript
public resetClusteringPolicy(): void
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetEvictionPolicy"></a>

```typescript
public resetEvictionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLinkedDatabaseGroupNickname` <a name="resetLinkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseGroupNickname"></a>

```typescript
public resetLinkedDatabaseGroupNickname(): void
```

##### `resetLinkedDatabaseId` <a name="resetLinkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseId"></a>

```typescript
public resetLinkedDatabaseId(): void
```

##### `resetModule` <a name="resetModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetModule"></a>

```typescript
public resetModule(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.module">module</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList">RedisEnterpriseDatabaseModuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference">RedisEnterpriseDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocolInput">clientProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicyInput">clusteringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNicknameInput">linkedDatabaseGroupNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseIdInput">linkedDatabaseIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.moduleInput">moduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocol">clientProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicy">clusteringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNickname">linkedDatabaseGroupNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseId">linkedDatabaseId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.module"></a>

```typescript
public readonly module: RedisEnterpriseDatabaseModuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList">RedisEnterpriseDatabaseModuleList</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: RedisEnterpriseDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference">RedisEnterpriseDatabaseTimeoutsOutputReference</a>

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocolInput"></a>

```typescript
public readonly clientProtocolInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusteringPolicyInput`<sup>Optional</sup> <a name="clusteringPolicyInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicyInput"></a>

```typescript
public readonly clusteringPolicyInput: string;
```

- *Type:* string

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicyInput"></a>

```typescript
public readonly evictionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedDatabaseGroupNicknameInput`<sup>Optional</sup> <a name="linkedDatabaseGroupNicknameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNicknameInput"></a>

```typescript
public readonly linkedDatabaseGroupNicknameInput: string;
```

- *Type:* string

---

##### `linkedDatabaseIdInput`<sup>Optional</sup> <a name="linkedDatabaseIdInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseIdInput"></a>

```typescript
public readonly linkedDatabaseIdInput: string[];
```

- *Type:* string[]

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.moduleInput"></a>

```typescript
public readonly moduleInput: IResolvable | RedisEnterpriseDatabaseModule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RedisEnterpriseDatabaseTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a> | cdktf.IResolvable

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocol"></a>

```typescript
public readonly clientProtocol: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusteringPolicy`<sup>Required</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicy"></a>

```typescript
public readonly clusteringPolicy: string;
```

- *Type:* string

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedDatabaseGroupNickname`<sup>Required</sup> <a name="linkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNickname"></a>

```typescript
public readonly linkedDatabaseGroupNickname: string;
```

- *Type:* string

---

##### `linkedDatabaseId`<sup>Required</sup> <a name="linkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseId"></a>

```typescript
public readonly linkedDatabaseId: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisEnterpriseDatabaseConfig <a name="RedisEnterpriseDatabaseConfig" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

const redisEnterpriseDatabaseConfig: redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clientProtocol">clientProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusteringPolicy">clusteringPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseGroupNickname">linkedDatabaseGroupNickname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseId">linkedDatabaseId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.module">module</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]</code> | module block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clientProtocol"></a>

```typescript
public readonly clientProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}.

---

##### `clusteringPolicy`<sup>Optional</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusteringPolicy"></a>

```typescript
public readonly clusteringPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkedDatabaseGroupNickname`<sup>Optional</sup> <a name="linkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseGroupNickname"></a>

```typescript
public readonly linkedDatabaseGroupNickname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}.

---

##### `linkedDatabaseId`<sup>Optional</sup> <a name="linkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseId"></a>

```typescript
public readonly linkedDatabaseId: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.module"></a>

```typescript
public readonly module: IResolvable | RedisEnterpriseDatabaseModule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#module RedisEnterpriseDatabase#module}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedisEnterpriseDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}

---

### RedisEnterpriseDatabaseModule <a name="RedisEnterpriseDatabaseModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

const redisEnterpriseDatabaseModule: redisEnterpriseDatabase.RedisEnterpriseDatabaseModule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.args">args</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}.

---

### RedisEnterpriseDatabaseTimeouts <a name="RedisEnterpriseDatabaseTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

const redisEnterpriseDatabaseTimeouts: redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisEnterpriseDatabaseModuleList <a name="RedisEnterpriseDatabaseModuleList" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

new redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get"></a>

```typescript
public get(index: number): RedisEnterpriseDatabaseModuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisEnterpriseDatabaseModule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>[]

---


### RedisEnterpriseDatabaseModuleOutputReference <a name="RedisEnterpriseDatabaseModuleOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

new redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.argsInput">argsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.args">args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisEnterpriseDatabaseModule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a> | cdktf.IResolvable

---


### RedisEnterpriseDatabaseTimeoutsOutputReference <a name="RedisEnterpriseDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { redisEnterpriseDatabase } from '@cdktf/provider-azurerm'

new redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisEnterpriseDatabaseTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a> | cdktf.IResolvable

---



