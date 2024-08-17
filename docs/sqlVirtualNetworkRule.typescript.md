# `sqlVirtualNetworkRule` Submodule <a name="`sqlVirtualNetworkRule` Submodule" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlVirtualNetworkRule <a name="SqlVirtualNetworkRule" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule azurerm_sql_virtual_network_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

new sqlVirtualNetworkRule.SqlVirtualNetworkRule(scope: Construct, id: string, config: SqlVirtualNetworkRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig">SqlVirtualNetworkRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig">SqlVirtualNetworkRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetIgnoreMissingVnetServiceEndpoint">resetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlVirtualNetworkRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreMissingVnetServiceEndpoint` <a name="resetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetIgnoreMissingVnetServiceEndpoint"></a>

```typescript
public resetIgnoreMissingVnetServiceEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlVirtualNetworkRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlVirtualNetworkRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlVirtualNetworkRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlVirtualNetworkRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlVirtualNetworkRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference">SqlVirtualNetworkRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpointInput">ignoreMissingVnetServiceEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeouts"></a>

```typescript
public readonly timeouts: SqlVirtualNetworkRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference">SqlVirtualNetworkRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpointInput"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlVirtualNetworkRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlVirtualNetworkRuleConfig <a name="SqlVirtualNetworkRuleConfig" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.Initializer"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

const sqlVirtualNetworkRuleConfig: sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#name SqlVirtualNetworkRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#resource_group_name SqlVirtualNetworkRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#server_name SqlVirtualNetworkRule#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#subnet_id SqlVirtualNetworkRule#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#id SqlVirtualNetworkRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#ignore_missing_vnet_service_endpoint SqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#name SqlVirtualNetworkRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#resource_group_name SqlVirtualNetworkRule#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#server_name SqlVirtualNetworkRule#server_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#subnet_id SqlVirtualNetworkRule#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#id SqlVirtualNetworkRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#ignore_missing_vnet_service_endpoint SqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlVirtualNetworkRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#timeouts SqlVirtualNetworkRule#timeouts}

---

### SqlVirtualNetworkRuleTimeouts <a name="SqlVirtualNetworkRuleTimeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.Initializer"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

const sqlVirtualNetworkRuleTimeouts: sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#create SqlVirtualNetworkRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#delete SqlVirtualNetworkRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#read SqlVirtualNetworkRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#update SqlVirtualNetworkRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#create SqlVirtualNetworkRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#delete SqlVirtualNetworkRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#read SqlVirtualNetworkRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_virtual_network_rule#update SqlVirtualNetworkRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlVirtualNetworkRuleTimeoutsOutputReference <a name="SqlVirtualNetworkRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlVirtualNetworkRule } from '@cdktf/provider-azurerm'

new sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlVirtualNetworkRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>

---



