# `servicebusSubscriptionRule` Submodule <a name="`servicebusSubscriptionRule` Submodule" id="@cdktf/provider-azurerm.servicebusSubscriptionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusSubscriptionRule <a name="ServicebusSubscriptionRule" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule azurerm_servicebus_subscription_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

new servicebusSubscriptionRule.ServicebusSubscriptionRule(scope: Construct, id: string, config: ServicebusSubscriptionRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig">ServicebusSubscriptionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig">ServicebusSubscriptionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter">putCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetCorrelationFilter">resetCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetSqlFilter">resetSqlFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorrelationFilter` <a name="putCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter"></a>

```typescript
public putCorrelationFilter(value: ServicebusSubscriptionRuleCorrelationFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicebusSubscriptionRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCorrelationFilter` <a name="resetCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetCorrelationFilter"></a>

```typescript
public resetCorrelationFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSqlFilter` <a name="resetSqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetSqlFilter"></a>

```typescript
public resetSqlFilter(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusSubscriptionRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicebusSubscriptionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusSubscriptionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusSubscriptionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusSubscriptionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilter">correlationFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference">ServicebusSubscriptionRuleCorrelationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterCompatibilityLevel">sqlFilterCompatibilityLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference">ServicebusSubscriptionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilterInput">correlationFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterInput">sqlFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilter">sqlFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `correlationFilter`<sup>Required</sup> <a name="correlationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilter"></a>

```typescript
public readonly correlationFilter: ServicebusSubscriptionRuleCorrelationFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference">ServicebusSubscriptionRuleCorrelationFilterOutputReference</a>

---

##### `sqlFilterCompatibilityLevel`<sup>Required</sup> <a name="sqlFilterCompatibilityLevel" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterCompatibilityLevel"></a>

```typescript
public readonly sqlFilterCompatibilityLevel: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusSubscriptionRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference">ServicebusSubscriptionRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `correlationFilterInput`<sup>Optional</sup> <a name="correlationFilterInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilterInput"></a>

```typescript
public readonly correlationFilterInput: ServicebusSubscriptionRuleCorrelationFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sqlFilterInput`<sup>Optional</sup> <a name="sqlFilterInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterInput"></a>

```typescript
public readonly sqlFilterInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicebusSubscriptionRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sqlFilter`<sup>Required</sup> <a name="sqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilter"></a>

```typescript
public readonly sqlFilter: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusSubscriptionRuleConfig <a name="ServicebusSubscriptionRuleConfig" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.Initializer"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

const servicebusSubscriptionRuleConfig: servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.correlationFilter">correlationFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | correlation_filter block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.sqlFilter">sqlFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}.

---

##### `correlationFilter`<sup>Optional</sup> <a name="correlationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.correlationFilter"></a>

```typescript
public readonly correlationFilter: ServicebusSubscriptionRuleCorrelationFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

correlation_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#correlation_filter ServicebusSubscriptionRule#correlation_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlFilter`<sup>Optional</sup> <a name="sqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.sqlFilter"></a>

```typescript
public readonly sqlFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusSubscriptionRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#timeouts ServicebusSubscriptionRule#timeouts}

---

### ServicebusSubscriptionRuleCorrelationFilter <a name="ServicebusSubscriptionRuleCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.Initializer"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

const servicebusSubscriptionRuleCorrelationFilter: servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.correlationId">correlationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.messageId">messageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyTo">replyTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyToSessionId">replyToSessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.sessionId">sessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.to">to</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}.

---

##### `correlationId`<sup>Optional</sup> <a name="correlationId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.correlationId"></a>

```typescript
public readonly correlationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}.

---

##### `messageId`<sup>Optional</sup> <a name="messageId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}.

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}.

---

##### `replyToSessionId`<sup>Optional</sup> <a name="replyToSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyToSessionId"></a>

```typescript
public readonly replyToSessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}.

---

### ServicebusSubscriptionRuleTimeouts <a name="ServicebusSubscriptionRuleTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.Initializer"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

const servicebusSubscriptionRuleTimeouts: servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusSubscriptionRuleCorrelationFilterOutputReference <a name="ServicebusSubscriptionRuleCorrelationFilterOutputReference" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

new servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetCorrelationId">resetCorrelationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetMessageId">resetMessageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyTo">resetReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyToSessionId">resetReplyToSessionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetSessionId">resetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCorrelationId` <a name="resetCorrelationId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetCorrelationId"></a>

```typescript
public resetCorrelationId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetMessageId` <a name="resetMessageId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetMessageId"></a>

```typescript
public resetMessageId(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetReplyTo` <a name="resetReplyTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyTo"></a>

```typescript
public resetReplyTo(): void
```

##### `resetReplyToSessionId` <a name="resetReplyToSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyToSessionId"></a>

```typescript
public resetReplyToSessionId(): void
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetSessionId"></a>

```typescript
public resetSessionId(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationIdInput">correlationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageIdInput">messageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToInput">replyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionIdInput">replyToSessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionIdInput">sessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationId">correlationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageId">messageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyTo">replyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionId">replyToSessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `correlationIdInput`<sup>Optional</sup> <a name="correlationIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationIdInput"></a>

```typescript
public readonly correlationIdInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `messageIdInput`<sup>Optional</sup> <a name="messageIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageIdInput"></a>

```typescript
public readonly messageIdInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToInput"></a>

```typescript
public readonly replyToInput: string;
```

- *Type:* string

---

##### `replyToSessionIdInput`<sup>Optional</sup> <a name="replyToSessionIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionIdInput"></a>

```typescript
public readonly replyToSessionIdInput: string;
```

- *Type:* string

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionIdInput"></a>

```typescript
public readonly sessionIdInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `correlationId`<sup>Required</sup> <a name="correlationId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationId"></a>

```typescript
public readonly correlationId: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

---

##### `replyToSessionId`<sup>Required</sup> <a name="replyToSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionId"></a>

```typescript
public readonly replyToSessionId: string;
```

- *Type:* string

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicebusSubscriptionRuleCorrelationFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---


### ServicebusSubscriptionRuleTimeoutsOutputReference <a name="ServicebusSubscriptionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicebusSubscriptionRule } from '@cdktf/provider-azurerm'

new servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicebusSubscriptionRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

---



